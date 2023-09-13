import { useState, useEffect } from "react";
import { getAllLandings } from "../api/landing.api";
import LandingContainer from "../components/LandingContainer/LandingContainer";

import "./Styles.css";

export default function Inicio() {
  const [landings, setLandings] = useState([]);

  useEffect(() => {
    async function loadLanding() {
      const res = await getAllLandings();
      setLandings(res.data);
    }
    loadLanding();
  }, []);

  return (
    <main>
      <article className="containerHome">
        <h2>PRESENTACION PROFESIONAL</h2>
        <section className="containerBlock" style={{ whiteSpace: "pre-line" }}>
          {landings.map((landing) => (
            <LandingContainer
              key={landing.id}
              Title={landing.title}
              Content={landing.content}
            />
          ))}
        </section>
      </article>
    </main>
  );
}
