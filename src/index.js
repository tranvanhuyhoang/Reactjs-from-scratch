import React from "react";
import ReactDOM from "react-dom";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

function App() {
  return (
    <div>
      <h1>Set up react with webpack và babel</h1>
    </div>
  );
}

root.render(<App />);
