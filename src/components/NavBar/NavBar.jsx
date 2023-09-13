import { Link } from "react-router-dom";

import reactLogo from "../../assets/react.svg";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul className="navLinks">
          <li>
            <Link className="link" to="/inicio">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="link" to="/proyectos">
              Proyectos
            </Link>
          </li>
          <li>
            <Link className="link" to="/habilidades">
              Habilidades
            </Link>
          </li>
          <li>
            <Link className="link" to="/contacto">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
