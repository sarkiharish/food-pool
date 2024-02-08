import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_URL_CDN, } from '../constants.js';
import Shimmer from './Shimmer.js';
import useRestaurant from '../utils/useRestaurant.js';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice.js';

function RestaurantMenu() {
    
    const {resId} = useParams();

    const {restaurants, menuItems} = useRestaurant(resId);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
      dispatch(addItem(item))
    }
   
     
  return (!restaurants) ? <Shimmer /> : ( 
    <div className="flex justify-center bg-gray-100 p-8">
  <div className="restaurant-info">
    <h1 className="text-2xl font-bold mb-2">Restaurant Id: {resId}</h1>
    <h2 className="text-xl font-semibold mb-2">{restaurants.name}</h2>
    <img
      src={IMG_URL_CDN + restaurants.cloudinaryImageId}
      className="w-full h-40 object-cover mb-4 rounded-md"
      alt="Restaurant Image"
    />
    <h3 className="text-lg mb-1">{restaurants.area}</h3>
    <h3 className="text-lg mb-1">{restaurants.city}</h3>
    <h3 className="text-lg mb-4">{restaurants.avgRating} stars</h3>
    <h3 className="text-lg">{restaurants.costForTwoMessage}</h3>
  </div>
    
  <div className="ml-4 mt-8">
    <h1 className="text-2xl font-bold mb-4">Menu</h1>
    <ul className="list-disc pl-4">
      {menuItems.map((item) => (
        <li key={item.id} className="text-lg mb-2">
        {item.name} - {" "}
      <button className='p-1 bg-green-400 hover:bg-sky-700 rounded-md' onClick={() => handleAddItem(item)}>Add Item</button>
        
        </li>
        
      ))}
    </ul>
  </div>
</div>

  )
}

export default RestaurantMenu