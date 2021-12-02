import * as React from "react";
import "./App.css";

import NavBar from "./components/navbar/navbar.component";
import AppRoutes from "./Routes";

const pages = [
  { name: "Home", route: "/" },
  { name: "About", route: "/about" },
  { name: "Price Sheet", route: "/price-sheet" },
  { name: "Portfolio", route: "/portfolio" },
  { name: "Testimonials", route: "/testimonials" },
  { name: "Contact", route: "/contact" },
];

function App() {
  return (
    <>
      <NavBar pages={pages} />
      <AppRoutes />
    </>
  );
}

export default App;
