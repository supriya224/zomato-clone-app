import React from "react";
import "./DeliveryItem.css";

const DeliveryItem = ({ item }) => {
  return (
    <div className="delivery-max-width">
      <div className="delivery-item-cover">
        <img src={item.cover} className="delivery-item-img" alt={item.title} />
      </div>
      <div className="deilvery-itm-title">{item.title}</div>
    </div>
  );
};

export default DeliveryItem;
