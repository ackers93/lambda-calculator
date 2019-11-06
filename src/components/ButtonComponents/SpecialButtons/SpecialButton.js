import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="special-button">
      {props.button}
    </button>
  );
};

export default SpecialButton;