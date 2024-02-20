/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./Card";
import './Special.css';

const Special = ({ data }) => {
  if (!Array.isArray(data)) {
    return <p>Loading specials...</p>;
  }

  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h3>This week specials!</h3>
      </div>
      <div className="special-body">
        {data.map((element, index) => {
          return <Card key={index} data={element} />;
        })}
      </div>
    </section>
  );
};

export default Special;

