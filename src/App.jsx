import "./App.css";
import OpeningPage from "./components/OpeningPage";
import { useState } from "react";
import Quiz from "./components/Quiz";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false); //original value false

  function handleClick() {
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
      {isGameStarted ? <Quiz /> : <OpeningPage isGameStarted={handleClick} />}
    </>
  );
}

export default App;
