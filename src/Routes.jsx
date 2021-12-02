import { Routes, Route } from "react-router";

import HomePage from "./pages/home/home.component";
import AboutPage from "./pages/about/about.component";
import PortfolioPage from "./pages/portfolio/portfolio.component";
import PriceSheetPage from "./pages/price-sheet/price-sheet.component";
import TestimonialsPage from "./pages/testimonials/testimonials.component";
import ContactPage from "./pages/contact/contact.component";

const AppRoutes = () => (
  <Routes>
    <Route index path="/" element={<HomePage />} />
    <Route index path="/about" element={<AboutPage />} />
    <Route index path="/price-sheet" element={<PriceSheetPage />} />
    <Route index path="/portfolio" element={<PortfolioPage />} />
    <Route index path="/testimonials" element={<TestimonialsPage />} />
    <Route index path="/contact" element={<ContactPage />} />
  </Routes>
);

export default AppRoutes;
