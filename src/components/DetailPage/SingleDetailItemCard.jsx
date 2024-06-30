import React, { useState } from "react";

const SingleDetailItemCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="box">
      <button className="accordion" onClick={toggle}>
        <h2>{item.courseName}</h2>
        <span>
          {isOpen ? <i className="fa fa-chevron-down"></i> : <i className="fa fa-chevron-right"></i>}
        </span>
      </button>
      {isOpen && (
        <div className="text">
          {item.description.map((module, moduleIndex) => (
            <div key={moduleIndex} className="module">
              <h3>{module.tite}</h3>
              <ul>
                {module.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SingleDetailItemCard;
