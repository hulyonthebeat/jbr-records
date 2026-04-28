import { useEffect } from "react";
import { Header, Footer, RosterSection } from "./Home";

export default function Roster() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <Header />
      <main>
        <RosterSection />
      </main>
      <Footer />
    </>
  );
}
