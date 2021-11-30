import "./App.css";

import NavBar from "./components/navbar/navbar.component";
import Hero from "./components/hero/hero.component";

const pages = [
  "Home",
  "About",
  "Price Sheet",
  "Portfolio",
  "Testimonials",
  "Contact",
];

function App() {
  return (
    <>
      <NavBar pages={pages} />
      <Hero />
    </>
  );
}

export default App;
