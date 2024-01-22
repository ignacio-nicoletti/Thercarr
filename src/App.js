import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/about/about";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
      </Routes>
    </div>
  );
}

export default App;
