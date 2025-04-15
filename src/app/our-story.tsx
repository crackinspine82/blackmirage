import React from "react";
import StorySmokeBackground from "@/components/StorySmokeBackground";

export default function OurStory() {
  return (
    <section style={{ position: "relative", minHeight: "80vh", overflow: "hidden" }}>
      <StorySmokeBackground />
      <div style={{ position: "relative", zIndex: 1, padding: "4rem 2rem", color: "#fff" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700 }}>Our Story</h1>
        <p style={{ maxWidth: 600, marginTop: 24, fontSize: "1.25rem" }}>
          {/* Replace this with your actual story content */}
          We are a team of passionate creators, technologists, and strategists who believe in the power of digital experiences. Our journey began with a vision to craft unique solutions that blend creativity, technology, and business impact.
        </p>
      </div>
    </section>
  );
}
