import { useEffect } from "react";
import { Header, Footer } from "./Home";

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="about-page">
          <div className="about-hero">
            <div className="about-hero-text">
              <div className="about-eyebrow">ABOUT</div>
              <h1 className="about-page-title">JBR CREATIVE GROUP</h1>
              <div className="about-copy">
                <p className="about-lede">
                  JBR Creative Group is a multidisciplinary powerhouse
                  revolutionizing the future of entertainment. Combining over
                  three decades of industry experience, JBR is the brainchild
                  of Grammy-nominated neo-soul act <strong>Eric Benét</strong>{" "}
                  and veteran entertainment executive{" "}
                  <strong>Alison Ball</strong>, pioneering significant change
                  in music, film/TV, and tech.
                </p>
                <p>
                  With an emphasis on empowering the creative community, JBR
                  champions an equal playing field and aims to uplift artists
                  through innovative technology — sharing knowledge and
                  resources with the online community and introducing
                  state-of-the-art solutions to the challenges emerging artists
                  and legacy acts face today.
                </p>
                <p>
                  The highlight of that approach lies in the development of
                  new acts <strong>Joe Leone</strong> and{" "}
                  <strong>Autumn Paige</strong> — uplifting the creator economy
                  by fostering transparency and serving as a beacon of
                  trail-blazing innovation.
                </p>
              </div>

              <div className="about-leadership">
                <div className="leadership-eyebrow">LEADERSHIP</div>
                <div className="leader-grid">
                  <article className="leader-card">
                    <div className="leader-photo">
                      <img
                        src={`${import.meta.env.BASE_URL}about/eric-benet.jpg`}
                        alt="Eric Benét"
                      />
                    </div>
                    <div className="leader-meta">
                      <h2 className="leader-card-name">ERIC BENÉT</h2>
                      <div className="leader-card-role">President</div>
                    </div>
                  </article>

                  <article className="leader-card">
                    <div className="leader-photo">
                      <img
                        src={`${import.meta.env.BASE_URL}about/alison-ball.jpg`}
                        alt="Alison Ball"
                      />
                    </div>
                    <div className="leader-meta">
                      <h2 className="leader-card-name">ALISON BALL</h2>
                      <div className="leader-card-role">CEO</div>
                    </div>
                  </article>
                </div>
              </div>
            </div>

            <figure className="about-hero-image">
              <img
                src={`${import.meta.env.BASE_URL}about/jbr-banner.png`}
                alt="Eric Benét and Alison Ball, founders of JBR Creative Group"
              />
            </figure>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
