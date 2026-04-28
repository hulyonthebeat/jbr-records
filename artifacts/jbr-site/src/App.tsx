import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import Home from "@/pages/Home";
import Artist from "@/pages/Artist";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import Roster from "@/pages/Roster";
import NotFound from "@/pages/not-found";

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

function RouteFade({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  return (
    <div key={location} className="route-fade">
      {children}
    </div>
  );
}

function useImageFadeIn() {
  useEffect(() => {
    const markLoaded = (img: HTMLImageElement) => {
      img.setAttribute("data-loaded", "true");
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
  usePrefetchHeavyRoutes();
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <RouteFade>
        <Router />
      </RouteFade>
    </WouterRouter>
  );
}

export default App;
