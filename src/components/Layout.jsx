import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

export default function Layout() {
  return (
    <>
      <Header/>
      <NavBar/>

      <Outlet/>

      <Footer/>
    </>
  )
}
