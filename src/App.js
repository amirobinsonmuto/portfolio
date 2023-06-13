import NavBar from "./components/NavBar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
