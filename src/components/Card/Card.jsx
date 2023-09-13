import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

import "./Card.css";

export default function Card({ id, imageProject, titleProject, contentProject, pdfProject }) {
  return (
    <>
      <div className="card">
        <LazyLoad>
          <img src={imageProject} alt={"imagenProject"} />
        </LazyLoad>
        <div className="container">
          <h4><b>{titleProject}</b></h4>
          <p>{contentProject}</p>
          <a className="link" href={pdfProject} target="_blank">DESCARGA PDF</a>
        </div>
      </div>
    </>
  )
}
