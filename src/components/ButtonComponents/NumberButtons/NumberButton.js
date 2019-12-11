import React from "react";

const NumberButton = (props) => {
  const {buttonNum, setNumDisplay, numDisplay} = props
  return (
    <div className = 'button-numbers'>
    <button onClick = {()=> setNumDisplay(numDisplay + buttonNum)}>{buttonNum}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      </div>
  );
};

export default NumberButton