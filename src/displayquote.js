import React from "react";

const DisplayQuote = ({ quote }) => {
  return (
    <figure>
      <img src={quote.image} alt={quote.character} />
      <figcaption>
        <blockquote>{quote.quote}</blockquote>
        <cite>{quote.character}</cite>
      </figcaption>
    </figure>
  );
};

export default DisplayQuote;
