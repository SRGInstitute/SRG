import React from "react";

import "./Heading.css";

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div id="heading" className="heading">
        <h5>{subtitle} </h5>
        <h1 className="heading-title">{title} </h1>
      </div>
    </>
  );
};

export default Heading;
