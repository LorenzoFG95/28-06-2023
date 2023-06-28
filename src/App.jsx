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
      <Para />
    </>
  );
}

export default App;
