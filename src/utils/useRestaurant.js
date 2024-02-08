import { useState, useEffect } from "react";
import { RESTAURANT_TYPE_KEY, MENU_ITEM_TYPE_KEY, FETCH_MENU_URL } from '../constants'

const useRestaurant = (resId) => {
    const [restaurants, setRestaurants] = useState({});
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        const data = await fetch(    
            FETCH_MENU_URL + resId
        )
        const json = await data.json();
        console.log("Restaurant info json data:::",json.data)
        const restaurantData = json?.data?.cards?.map(x => x.card)?.
                             find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
        setRestaurants(restaurantData)



        //Menu items
        const menuItemsData = json?.data?.cards?.find(x=> x.groupedCard)?.
                            groupedCard?.cardGroupMap?.REGULAR?.
                            cards?.map(x => x.card?.card)?.
                            filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
                            map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];
      
      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find(x => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      })
      setMenuItems(uniqueMenuItems);
    }  

    return {restaurants, menuItems};
};

export default useRestaurant; 