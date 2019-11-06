import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [operatorAdd] = useState(operators);
  return (
    <div className="operator-div">
      {operatorAdd.map((button, index) => (
        <OperatorButton key={index} button={button.char} />
      ))}
    </div>
  );
};

export default Operators;