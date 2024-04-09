import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Content from "./Components/Content/Content";
import Navbar from "./Components/Navbar/Navbar";
import Slogan from "./Components/Slogan/Slogan";
import Signup from "./Components/Signup/Signup";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setIsMobile] = useState(false);
  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, [windowSize]);

  useEffect(() => {
    if (windowSize.width < 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowSize]);

  return (
    <Router>
      <div className="font-sora overflow-y-auto overflow-x-hidden h-screen px-4 py-8 bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 dark:text-white from-white to-pink-500 text-black md:px-20">
        <Navbar isMobile={isMobile} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slogan />
                <Content />
              </>
            }
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
