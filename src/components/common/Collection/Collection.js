import React from "react";
import "./Collection.css";
import { IoMdArrowDropright } from "react-icons/io";
import NextArrow from "../Carousel/NextArrow";
import PrevArrow from "../Carousel/PreArrow";
import Slider from "react-slick";

const settings = {
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
const collection = ({ list }) => {
  return (
    <div className="collection-wrapper">
      <div className="max-width collection">
        <div className="collection-title">Collections</div>
        <div className="collection-subtitle-row">
          <div className="collection-subtitle-text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Bengaluru, based on trends
          </div>
          <div className="collection-location">
            All collections in Bengaluru
            <IoMdArrowDropright />
          </div>
        </div>
        <Slider {...settings}>
          {list.map((item) => (
            <div>
              <div className="collection-cover">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="collection-image"
                />
                <div className="gradient-bg"></div>
                <div className="collection-card-title">{item.title}</div>
                <div className="collection-card-subtitle"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
    //  {/*  {deliveryItems.map((item)=>{
    //         return <DeliveryItem item={item} />
    //       })} */}
export default collection;
