import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import About from "./pages/About/About";
import History from "./pages/History/History";
import Timeline from "./pages/Timeline/Timeline";
import Gallery from "./pages/Gallery/Gallery";
import Projects from "./pages/Projects/Projects";
import Alumni from "./pages/Alumni/Alumni";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import Navigation from "./components/Navigation/Navigation";

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/history" element={<History />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/alumni" element={<Alumni />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
