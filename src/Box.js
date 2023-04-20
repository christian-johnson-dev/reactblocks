function Box(props) {
  const boxStyle = {
    backgroundColor: props.color,
    width: props.size + "px",
    height: props.size + "px",
    borderRadius: props.shape,
  };
  return <div style={boxStyle}></div>;
}

export default Box;
