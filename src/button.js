import React from "react";

const Button = ({ selectQuote }) => {
  return (
    <div className="selectQuote">
      <button onClick={selectQuote}>Get Quote</button>
    </div>
  );
};

export default Button;
