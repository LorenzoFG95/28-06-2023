import { useEffect } from "react";
import "./App.css";
import Para from "./components/Para";

function App() {
  useEffect(() => {
    setInterval(() => {
      document.body.style.background = `#${Math.floor(
        Math.random() * 16777215
      ).toString(16)}`;
    }, 1000);
  }, []);

  return (
    <>
      <h1 className="App_title">Titolo</h1>
      <h2 className="App_title">Sottotitolo 2 diverso dal primo</h2>
      <Para />
    </>
  );
}

export default App;
