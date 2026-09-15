import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Register from "./pages/Register";
import Coordinator from "./pages/Coordinator";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import EventDetails from "./pages/EventDetails";

function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventDetails />}/>
          <Route path="/registration" element={<Register />} />
          <Route path="/coordinator" element={<Coordinator />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;