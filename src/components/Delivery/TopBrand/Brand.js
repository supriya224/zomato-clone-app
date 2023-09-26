import React from "react";
import "./Brand.css";
import NextArrow from "../../common/Carousel/NextArrow";
import PreArrow from "../../common/Carousel/PreArrow";
import Slider from "react-slick";
const BrandList = [
  {
    id: 1,
    time: "44 min",
    image:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png?output-format=webp",
  },
  {
    id: 2,
    time: "34 min",
    image:
      "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png?output-format=webp",
  },
  {
    id: 3,
    time: "44 min",
    image:
      "https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png?output-format=webp",
  },
  {
    id: 4,
    time: "34 min",
    image:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
  },
  {
    id: 5,
    time: "46 min",
    image:
      "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png?output-format=webp",
  },
  {
    id: 6,
    time: "44 min",
    image:
      "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp",
  },
  {
    id: 7,
    time: "48 min",
    image:
      "https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505477.png?output-format=webp",
  },
];
const settings = {
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PreArrow />,
};

const Brand = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title ">Top brands for you</div>
      <Slider {...settings}>
        {BrandList.map((brand) => {
          return (
            <div>
              <div className="top-brands-cover">
                <img src={brand.image} className="top-brands-image"  alt={brand.time}/>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Brand;
