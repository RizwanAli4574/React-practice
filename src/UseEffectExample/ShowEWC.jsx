import { useState } from "react";
import ExapleWithCleanUp from "./ExapleWithCleanUp";

function ShowEWC() {
  const [show, setShow] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Timer" : "Show Timer"}
      </button>
      {show && <ExapleWithCleanUp />}
    </div>
  );
}

export default ShowEWC;