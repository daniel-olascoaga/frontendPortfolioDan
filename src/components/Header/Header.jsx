import backgroundHeader from "../../assets/imagen2.jpg";
import foto from "../../assets/foto.png";

import "./Header.css";

export default function Header() {
  return (
    <>
      <header>
        <div 
          className="imageBackground"
          style={{ 
            backgroundImage: `url(${backgroundHeader})`, 
            height: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative' 
          }}
        >
          <div className="heroContainer">
            <img src={foto} alt="foto" />
            <h1>Daniel Olascoaga</h1>
            <p>Tecnólogo en electrónica industrial</p>
          </div>
        </div>
      </header>
    </>
  );
}
