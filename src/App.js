import * as React from "react";
import "./App.css";
import { Routes, Route } from "react-router";

import NavBar from "./components/navbar/navbar.component";
import HomePage from "./pages/home/home.component";
import AboutPage from "./pages/about/about.component";
import PortfolioPage from "./pages/portfolio/portfolio.component";
import PriceSheetPage from "./pages/price-sheet/price-sheet.component";
import TestimonialsPage from "./pages/testimonials/testimonials.component";
import ContactPage from "./pages/contact/contact.component";
import Footer from "./components/footer/footer.component";

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
      <main>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route index path="/about" element={<AboutPage />} />
          <Route index path="/price-sheet" element={<PriceSheetPage />} />
          <Route index path="/portfolio" element={<PortfolioPage />} />
          <Route index path="/testimonials" element={<TestimonialsPage />} />
          <Route index path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
