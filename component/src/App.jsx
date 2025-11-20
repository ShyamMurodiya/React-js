import React from "react";
import Card from "./componets/card.jsx";
import Navbar from "./componets/navbar.jsx";
import Card1 from "./componets/card1.jsx";

const App = () => {
  return (
    <div className="parent">
      <Navbar />
      <Card1 user='Shyam' age={21} clg=' I am in GHRCE Nagpur 👨🏻‍🎓 '/>
      <Card1 user='Tanmay' age={19} clg=' I am in YCCE Nagpur 👨🏻‍🎓 '/>
      <Card1 user='Krishna' age={20} clg=' I am in PCE Nagpur 👨🏻‍🎓 '/>
      {/* <Card1 /> */}
      <div className="card">
        <h1> In progress ↺ </h1>
        <Card />
      </div>
    </div>
  );
};

export default App;
