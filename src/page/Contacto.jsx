import contact from "../assets/imagen1.png";

import "./Styles.css"

export default function Contacto() {
  return (
    <>
      <article className="contactContainer">
        <section>
            <img src={contact} alt="contact" />
        </section>
      </article>
    </>
  );
}
