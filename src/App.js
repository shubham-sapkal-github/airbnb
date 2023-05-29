import React from "react";
import "./App.css";
import Navbar from "./Components/navbar/navbar";
import Hero from "./Components/hero/hero";
import Card from "./Components/card/card";
import cardData from "./cardData";

function App() {
  const cardElements = cardData.map((item) => {
    return (
      <Card
        key={item.id}
       card={item}
      />
    );
  });

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <div className="card_section">{cardElements}</div>
    </div>
  );
}

export default App;
