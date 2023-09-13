import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

import Layout from "./components/Layout";
import Inicio from "./page/Inicio";
import Proyectos from "./page/Proyectos";
import Habilidades from "./page/Habilidades";
import Contacto from "./page/Contacto";
import Error_404 from "./page/404";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Inicio/>}/>
            <Route path="inicio" element={<Inicio/>}/>
            <Route path="proyectos" element={<Proyectos/>}/>
            <Route path="Habilidades" element={<Habilidades/>}/>
            <Route path="Contacto" element={<Contacto/>}/>
            <Route path="*" element={<Error_404/>}/>
          </Route>
        </Routes>
  </BrowserRouter>
    </>
  )
}

