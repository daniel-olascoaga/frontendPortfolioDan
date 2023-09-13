import { useState, useEffect } from "react";
import { getAllCards } from "../api/card.api";
import Card from "../components/Card/Card";

import "./Styles.css";

export default function Proyectos() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function loadCard() {
      const res = await getAllCards();
      setCards(res.data);
    }
    loadCard();
  }, []);

  return (
    <>
      <article className="containerProjects">
        <h2>PROYECTOS</h2>
        <section className="containerCards">
          {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              imageProject={card.imagenProject}
              titleProject={card.titleProject}
              contentProject={card.contentProject}
              pdfProject={card.pdfProject}
            />
          ))}
        </section>
      </article>
    </>
  );
}
