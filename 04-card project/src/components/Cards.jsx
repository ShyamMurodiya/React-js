import React from "react";
import { Bookmark } from "lucide-react";

const Cards = (Props) => {

  
  return (
    <div className="card">
      <div className="top">
        <img
          src={Props.logo}
          alt="photo"
        />
        <button>
          save
          <Bookmark size={10} />{" "}
        </button>
      </div>

      <div className="middle">
        <div className="center">
          <h3>
            {Props.comp}<span>  5 days ago</span>
          </h3>
          <h2>{Props.title}</h2>
          <div className="tag">
            <h4>{Props.type1}</h4>
            <h4>{Props.type2} </h4>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <h3>{Props.salary}</h3>
          <p>{Props.location}</p>
        </div>
        <button>Apply now</button>
      </div>
    </div>
  );
};

export default Cards;
