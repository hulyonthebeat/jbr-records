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
          <div className="about-page-inner">
            <div className="about-eyebrow">ABOUT</div>
            <h1 className="about-page-title">JBR CREATIVE GROUP</h1>

            <figure className="about-banner">
              <img
                src={`${import.meta.env.BASE_URL}about/jbr-banner.png`}
                alt="JBR Creative Group team"
              />
            </figure>

            <div className="about-copy">
              <p className="about-lede">
                JBR Creative Group is a multidisciplinary powerhouse that's
                revolutionizing the future of entertainment. Combining over
                three decades of industry experience, JBR is the brainchild of
                Grammy-nominated neo-soul act{" "}
                <strong>Eric Benét</strong> and veteran entertainment executive{" "}
                <strong>Alison Ball</strong>. Together, Benét and Ball are
                pioneering a significant change in the music, film/TV, and tech
                industries.
              </p>
              <p>
                With an emphasis on empowering the creative community, JBR
                champions an equal playing field and aims to uplift artists
                through innovative technology. Since its inception, the agency
                has routinely shared knowledge and resources with the online
                community, introducing state-of-the-art solutions to the many
                challenges that emerging artists and legacy acts face as a
                result of the recent paradigm shift in the music industry.
              </p>
              <p>
                The highlight of their cutting-edge approach lies in the
                development of their new acts <strong>Joe Leone</strong> and{" "}
                <strong>Autumn Paige</strong>. Through collaboration on an
                ambitious venture, JBR is uplifting the creator economy by
                fostering transparency and serving as a beacon of trail-blazing
                innovation. With a shared determination to create real change,
                JBR Creative Group is making a lasting impact on the culture at
                large.
              </p>
            </div>

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
        </section>
      </main>
      <Footer />
    </>
  );
}
