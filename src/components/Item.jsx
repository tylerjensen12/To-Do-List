import React, { useState } from "react";

function Item({ task }) {
  const [complete, setComplete] = useState(false);
    const handleClick = () => setComplete(!complete)

  return <li onClick={handleClick} className={complete ? "green" : "red"}>{task}</li>;
}

export default Item;
