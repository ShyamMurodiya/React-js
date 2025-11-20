import React from "react";

const Card1 = (propv) => {


  return (
    <div id="para">
      <h1>{propv.user}</h1>
      <p>
        <i><b>{propv.clg}</b></i>
      </p>
    </div>
  )
}

export default Card1;
