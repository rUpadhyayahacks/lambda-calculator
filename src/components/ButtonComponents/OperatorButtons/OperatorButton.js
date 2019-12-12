import React from "react";

const OperatorButton = (props) => {
  console.log('operator button', props)
  return (
    <>
    <button onClick> 
    {props.buttonNum.char}
    </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton
