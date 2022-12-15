import React from "react";
import "./styles.css";

function SuperButtonFunction({ text, alertText }) {
  const handleClick = () => {
    alert(alertText);
  };
  return <button onClick={handleClick}>{text}</button>;
}

export default SuperButtonFunction;
