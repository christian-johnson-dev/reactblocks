import { useState } from "react";

function Form({ onFormSubmit }) {
  //*============ COLOR ============*//
  const colorOptions = [
    "CadetBlue",
    "DarkGrey",
    "LemonChiffon",
    "Coral",
    "CornflowerBlue",
    "Thistle",
    "PaleVioletRed",
  ];

  const getRandomColor = () =>
    colorOptions[Math.floor(Math.random() * colorOptions.length)];

  const [color, setColor] = useState("Random Color");

  const colorSelectOptions = colorOptions.map((color, index) => (
    <option key={index} value={color}>
      {color}
    </option>
  ));
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  //*============ SIZE ============*//
  const sizeOptions = [50, 75, 100, 125, 150];

  const getRandomSize = () =>
    sizeOptions[Math.floor(Math.random() * sizeOptions.length)];

  const [size, setSize] = useState("Random Size");

  const sizeSelectOptions = sizeOptions.map((size, index) => (
    <option key={index} value={size}>
      {size} px
    </option>
  ));
  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  //*============ SHAPE ============*//
  const shapeOptions = ["square", "rounded"];

  const getRandomShape = () =>
    shapeOptions[Math.floor(Math.random() * shapeOptions.length)];

  const [shape, setShape] = useState("Random Shape");

  const shapeSelectOptions = shapeOptions.map((shape, index) => (
    <option key={index} value={shape}>
      {shape}
    </option>
  ));
  const handleShapeChange = (event) => {
    setShape(event.target.value);
  };

  //*============ FORM SUBMIT ============*//
  const handleSubmit = (event) => {
    event.preventDefault();
    const finalColor = color === "Random Color" ? getRandomColor() : color;
    const finalSize = size === "Random Size" ? getRandomSize() : size;
    const finalShape = shape === "Random Corner" ? getRandomShape() : shape;
    onFormSubmit(finalColor, finalSize, finalShape);
    setColor("Random Color");
    setSize("Random Size");
    setShape("Random Corner");
  };
  return (
    <form>
      <label htmlFor="colorSelector">Colors:</label>
      <select id="colorSelector" value={color} onChange={handleColorChange}>
        <option value="Random Color">Random Color</option>
        {colorSelectOptions}
      </select>
      <label htmlFor="sizeSelector">Size:</label>
      <select id="sizeSelector" value={size} onChange={handleSizeChange}>
        <option value="Random Size">Random Size</option>
        {sizeSelectOptions}
      </select>
      <label htmlFor="shapeSelector">Corner:</label>
      <select id="shapeSelector" value={shape} onChange={handleShapeChange}>
        <option value="Random Corner">Random Corner</option>
        {shapeSelectOptions}
      </select>

      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}

export default Form;
