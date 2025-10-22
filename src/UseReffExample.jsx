import { useRef, useState, useEffect } from "react";

function UseReffExample() {
  const [name, setName] = useState("");
  const renders = useRef(0); // ye ek hidden counter hai

  useEffect(() => {
    renders.current = renders.current + 1; // increase karega, screen pe show nahi hoga
  });

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>My name is: {name}</p>
      <p>This component rendered {renders.current} times.</p>
    </div>
  );
}
export default UseReffExample