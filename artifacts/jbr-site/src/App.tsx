import { useEffect, useLayoutEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import Home from "@/pages/Home";
import Artist from "@/pages/Artist";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import Roster from "@/pages/Roster";
import NotFound from "@/pages/not-found";
import CookieBanner from "@/components/CookieBanner";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/artists/:slug" component={Artist} />
      <Route path="/about" component={About} />
      <Route path="/roster" component={Roster} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function useImageFadeIn() {
  useLayoutEffect(() => {
    const markLoaded = (img: HTMLImageElement) => {
      // Defer one frame so the browser paints the initial (zoomed + faded)
      // state before transitioning — otherwise cached images skip the animation.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          img.setAttribute("data-loaded", "true");
        });
      });
    };
    const prepare = (img: HTMLImageElement) => {
      if (img.dataset.fadein) return;
      img.dataset.fadein = "true";
      if (img.complete && img.naturalWidth > 0) {
        markLoaded(img);
        return;
      }
      const onDone = () => {
        markLoaded(img);
        img.removeEventListener("load", onDone);
        img.removeEventListener("error", onDone);
      };
      img.addEventListener("load", onDone);
      img.addEventListener("error", onDone);
    };

    document.querySelectorAll("img").forEach(prepare);

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node instanceof HTMLImageElement) {
            prepare(node);
          } else if (node instanceof HTMLElement) {
            node.querySelectorAll("img").forEach(prepare);
          }
        });
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
}

const REVEAL_SELECTORS = [
  ".hero-text > *",
  ".hero-stage",
  ".release-poster",
  ".roster-card",
  ".news-card",
  ".leader-card",
  ".about-hero-image",
  ".about-eyebrow",
  ".about-page-title",
  ".about-copy > p",
  ".about-leadership > *",
  ".leadership-eyebrow",
  ".section-eyebrow",
  ".section-title",
  ".newsletter-inner > *",
  ".contact-section-inner > *",
  ".contact-form > *",
  ".artist-hero",
  ".artist-bio",
  ".artist-section",
];

function useScrollReveal() {
  const [location] = useLocation();

  // useLayoutEffect runs synchronously after React commits but BEFORE the
  // browser paints. This is critical for SPA navigation — we need to tag
  // elements with their initial (small + faded) state before the new page
  // is shown to the user, otherwise they see the page already at full size
  // and the transition gets skipped.
  useLayoutEffect(() => {
    const observed = new WeakSet<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            requestAnimationFrame(() => {
              el.dataset.revealed = "true";
            });
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    const tagAndObserve = () => {
      const fresh: HTMLElement[] = [];
      for (const selector of REVEAL_SELECTORS) {
        document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
          if (observed.has(el)) return;
          observed.add(el);
          el.dataset.reveal = "true";
          fresh.push(el);
        });
      }
      if (fresh.length === 0) return;
      // Wait two frames so the browser paints the initial (small + faded)
      // state before we start observing — otherwise elements already in the
      // viewport will skip their transition and just snap to final state.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          for (const el of fresh) observer.observe(el);
        });
      });
    };

    tagAndObserve();

    const mutationObserver = new MutationObserver(() => tagAndObserve());
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [location]);
}

function usePrefetchHeavyRoutes() {
  useEffect(() => {
    const base = import.meta.env.BASE_URL;
    const urls = [
      `${base}about/eric-benet.jpg`,
      `${base}about/alison-ball.jpg`,
      `${base}about/jbr-banner.png`,
      `${base}photos/eric-benet-hero.jpg`,
      `${base}photos/autumn-paige-jbr.jpg`,
      `${base}photos/joe-leone-jbr.jpg`,
    ];
    const t = window.setTimeout(() => {
      for (const url of urls) {
        const img = new Image();
        img.decoding = "async";
        img.src = url;
      }
    }, 800);
    return () => window.clearTimeout(t);
  }, []);
}

function App() {
  useImageFadeIn();
  useScrollReveal();
  usePrefetchHeavyRoutes();
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
      <CookieBanner />
    </WouterRouter>
  );
}

export default App;
