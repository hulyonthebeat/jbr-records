import { useEffect } from "react";
import { Header, Footer, ContactSection } from "./Home";

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <Header />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
