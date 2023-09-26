import React from "react";
import Filter from "../common/Filters/Filter";
import { BiSliderAlt } from "react-icons/bi";
import { GrFormDown } from "react-icons/gr";
import DeliveryCollections from "./DeliveryCollection/DeliveryCollections";
import Brand from "./TopBrand/Brand";
import Explore from "../common/ExploreSection/Explore";
// import { resturant } from "../../data/Resturant";
import {restaurants} from "../../data/Resturant";

const deliveryFilter = [
  {
    id: 1,
    icon: <BiSliderAlt />,
    title: "Filter",
  },
  {
    id: 2,
    title: "Rating. 4.0+",
  },
  {
    id: 3,
    title: "Pure Veg",
  },
  {
    id: 4,

    title: "Cuisines",
    icon: <GrFormDown />,
  },
];

const RestaurantList = restaurants;
const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filter filterList={deliveryFilter} />
      </div>
      <DeliveryCollections />
      <Brand />
      <Explore
        list={RestaurantList}
        collectionName="Delivery Restaurant in bangalore"
      />
    </div>
  );
};

export default Delivery;
