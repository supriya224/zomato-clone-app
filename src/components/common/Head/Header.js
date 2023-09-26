import React from "react";
import "./Header.css";
import { ImLocation2 } from "react-icons/im";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import {FcBusinesswoman} from 'react-icons/fc'
import {BiChevronDown} from 'react-icons/bi'
// import icon from '@flaticon/flaticon-uicons'
const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato-logo"
        className="header-logo"
      ></img>
      <div className="header-right">
        <div className="header-left-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              {/* <i className="fi fi-rr-marker">{icon}</i> */}
              <ImLocation2 className="absolute-center location-icon" />
              <div>bangalore</div>
            </div>
            <IoMdArrowDropdown className="absolute-center drop-down" />
          </div>
          <div className="location-search-seprator"></div>
          <div className="header-searchbar">
            <RiSearchLine className="absolute-center search-icon" />
            <input
              placeholder="Search for resturant, cuisine or a dish "
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
         <FcBusinesswoman className="header-profile-image"/>
         <span className="header-username">Alizajohn</span>
         <BiChevronDown className="absolute-center profile-options-icon"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
