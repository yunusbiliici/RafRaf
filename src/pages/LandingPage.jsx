import React from "react";
import Navbar from "../components/navbar";
import footer from "../components/footer";
import HeroBookAnimation from "../components/HeroBookAnimations";
import FeatureCards from "../components/FeatureCards";

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero-section">
          <h1>Kişisel Kütüphanen, Dijital Asistanınla!</h1>
          <HeroBookAnimation />
          {/* Kayıt ol butonu, Daha fazlası, vs */}
        </section>

        <FeatureCards />

        {/* Slider / Görseller */}
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
