import React from "react";
import "./Explore.css";
import Card from "./Card/Card";

const Explore = ({ list, collectionName }) => {
  
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">
        {list.map((restaurant) => {
          return <Card restaurant={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Explore;
