import React, { useState, useEffect } from "react";
import "./app.scss";
import Arrow from "./Arrow";
import Logo from "./logo";
import Sound from "./Sound";
import Star from "./Star";

function App() {
  const size = useWindowSize();

  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <div className="block">
            <div className="top_choice">
              <Sound />
              <p>Our Top Choice</p>
            </div>
            <Logo />
          </div>
          <div className="block">
            <h3>Welcome Bonus</h3>
            <p>
              {size.width < 768
                ? "Up to £25 New Player Bonus"
                : `Deposit £10 Get up to 500 Free Spins`}
            </p>
            {size.width > 768 && (
              <a href="#">18+. Play Safe. Opt in required. </a>
            )}
          </div>
          <div className="block">
            {size.width > 768 && <a href="#">Please vote!</a>}
            <div className="stars">
              <Star />
              <Star />
              <Star />
              <Star />
              {size.width < 768 && <p>9.9</p>}
            </div>
            <span>Rated by (3,904)</span>
          </div>
          <div className="block">
            {size.width > 768 && <p>9.9</p>}

            <div className="get_bonus">
              <button>
                <span>Get bonus {size.width > 768 && "🔥"}</span>
              </button>
              {size.width > 768 && (
                <a href="#">
                  Visit William Hill <Arrow />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export default App;
