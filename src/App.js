import "./style.css";
import { useState } from "react";
import Box from "./Box";
import Form from "./Form";
function App() {
  const [boxes, setBoxes] = useState([]);

  const handleSubmit = (finalColor, finalSize, finalShape) => {
    const borderRadius = finalShape === "rounded" ? "30%" : 0;
    setBoxes([
      ...boxes,
      { color: finalColor, size: finalSize, shape: borderRadius },
    ]);
  };
  console.log(boxes);

  const renderedBoxes = boxes.map((box, index) => {
    return (
      <Box key={index} color={box.color} size={box.size} shape={box.shape} />
    );
  });
  console.log(renderedBoxes);
  return (
    <div className="App">
      <nav>
        <h1>Great Little Box Company</h1>
        <Form onFormSubmit={handleSubmit} />
      </nav>

      <div className="boxDisplay">{renderedBoxes}</div>
    </div>
  );
}
export default App;
