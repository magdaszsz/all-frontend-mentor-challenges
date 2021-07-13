import React from "react";
import Card from "./Card";

function CardsContainer({ infos }) {
  return (
    <div className="cards-container">
      {infos.map((info, i) => {
        return <Card {...info} key={i} />;
      })}
    </div>
  );
}

export default CardsContainer;
