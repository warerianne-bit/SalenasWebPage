
import "./App.css";

// Navigation
import Navbar from "./NavBar.jsx";

// Website Sections
import Home from "./ComponentsPages/Home.jsx";
import Gallery from "./ComponentsPages/Gallery.jsx";
import About from "./ComponentsPages/About.jsx";
import Shop from "./ComponentsPages/Shop.jsx";
import Contact from "./ComponentsPages/Contact.jsx";

// Reusable Components
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Home />
        <Gallery />
        <About />
        <Shop />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
