import React, { useState, memo } from "react";
import "./App.css";

function Swatch({ params }) {
  console.log(`Swatch rendered ${params.color}`);
  return (
    <div
      style={{ margin: 2, width: 75, height: 75, background: params.color }}
    ></div>
  );
}

const MemoSwatch = memo(Swatch, (prevProps, nextProps) => {
  return prevProps.params.color === nextProps.params.color;
});

function App() {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  const [color, setColor] = useState("red");

  console.log(`App rendered ${appRenderIndex}`);

  return (
    <div className="App">
      <div>
        <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
          Re-Render App
        </button>
        <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
          Change Color
        </button>
        <MemoSwatch params={{ color }} />
      </div>
    </div>
  );
}

export default App;
