import { useState } from "react";
import "./App.css";

function App() {
  const colors = ["#FF0000", "#00FF00", "#0000FF"];
  const [colorIndex, setColorIndex] = useState(0);

  function handleClick() {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  }

  return (
    <div className="container" style={{ backgroundColor: colors[colorIndex], height: "100vh" }}>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
}

export default App;
