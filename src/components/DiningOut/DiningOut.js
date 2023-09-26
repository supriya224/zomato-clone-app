import React from 'react'
import './DiningOut.css'
import Collection from '../common/Collection/Collection'
import {BiSliderAlt} from 'react-icons/bi'
import {GrFormDown} from 'react-icons/gr'
import { diningOut } from '../../data/DataOut';
import Filter from '../common/Filters/Filter';
import Explore from '../common/ExploreSection/Explore';

const CollectionList=[
  {
    id:1,
    title:"trending this week",
    cover:"https://www.zomato.com/bangalore/microbreweries",
    place:"21 Places",

  },
  {
    id:2,
    title:"18 live Cricket screening",
    cover:"https://www.zomato.com/bangalore/sports-screenings",
    place:"19 Places",

  },
  {
    id:3,
    title:"25 serene",
    cover:"https://www.zomato.com/bangalore/rooftop",
    place:"26 Places",

  },
  {
    id:4,
    title:"Newly opened Restaurants",
    cover:"https://www.zomato.com/bangalore/newly-opened",
    place:"9 Places",

  },
  {
    id:5,
    title:"10 trending Restaurant",
    cover:"https://www.zomato.com/bangalore/trending-this-week",
    place:"10 Places",

  },
  {
    id:6,
    title:"Romantic Dining House",
    cover:"https://www.zomato.com/bangalore/romantic-restaurants",
    place:"15 Places",

  },
  {
    id:7,
    title:"Winner of zomato",
    cover:"https://www.zomato.com/bangalore/zomato-restaurant-awards-2023-winners",
    place:"17 Places",

  },
  {
    id:8,
    title:"11 Must-visit legendray",
    cover:"https://www.zomato.com/bangalore/microbrewerieshttps://www.zomato.com/bangalore/legendary-places21 Places",
    place:"11 Places",
  },
  
  
];
const diningFilter = [
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
  {
    id: 5,
    title: "Pure Veg",
  },
  {
    id: 6,
    title: "Pure Veg",
  },
];
const diningList=diningOut;
const DiningOut = () => {
  return (
    <div>
      <Collection list={CollectionList}/>
    <div className='max-width'>
      <Filter filterList={diningFilter}/>
    </div>
    <Explore list={diningList} collectionN ame="Dine-out restaurants in"/>
    </div>
  )
}

export default DiningOut
