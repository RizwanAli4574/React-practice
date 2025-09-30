import { useState } from 'react'


function Button({ text, color, ...rest }) {
  const styles = {
    backgroundColor: color,
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };

  return (
    <button style={styles} {...rest}>
      {text}
    </button>
  );
}

// Usage
function App() {
  return (
    <>
      <Button text="Click Me" color="blue" onClick={() => alert("Button Clicked!")} />
      <Button text="Submit" color="green" type="submit" />
      <Button text="Disabled" color="gray" disabled />
    </>
  );
}

export default App
