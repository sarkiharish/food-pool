import { useContext, useEffect, useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";


const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState('')

    const {user, setUser} = useContext(UserContext)
    useEffect(() => {
        getAllRestaurants();
    }, [])

    const getAllRestaurants = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json();

        setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       // console.log('cards[2].card.card.gridElements.infoWithStyle.filteredRestaurants', json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // const searchRestaurant = (restaurantToSearch) => {
    //     const filterData = allRestaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(restaurantToSearch.toLowerCase()))
    //     setFilteredRestaurants(filterData)
    // }

    // const handleSearch = () => {
    //     if (searchText.trim() === "") {
    //         setFilteredRestaurants(allRestaurants); 
    //     }else{
    //         searchRestaurant(searchText)
    //     }
    // }

    const onLine = useOnline();
    if(!onLine) {
        return <h1>🤷‍♂️ Offline 🤦‍♂️ Please check your internet connection!!😞</h1>
    }


    if (!allRestaurants) return null;

    // if(filteredRestaurants?.length === 0) return <h1>No Restaurant Found!</h1>

    return allRestaurants?.length === 0 ?
        (<Shimmer />) : (
            <>
                <div className="flex items-center space-x-4 py-2 justify-center">
                    <input type="search" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300" onClick={
                        () => {
                            const data = filterData(searchText, allRestaurants)
                            setFilteredRestaurants(data)
                        }
                    }>Search</button>

                    <input value={user.name}
                     onChange={(e) => setUser({
                        name:e.target.value,
                        email: "newemail@foodpool.com"
                     })}
                     />
                </div>
                {/* <div className="bg-gray-300 p-4 my-2 flex items-center">
                    <input type="search" className="search-inputbg-gray-100 border-2 border-gray-400 rounded py-2 px-4 mr-2 focus:outline-none focus:border-blue-500" placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={
                        () => {
                            const data = filterData(searchText, allRestaurants)
                            setFilteredRestaurants(data)
                        }
                    }>Search</button>
                </div> */}
                <div className="flex flex-wrap justify-evenly bg-amber-200">
                    {
                        filteredRestaurants?.map((restaurant) => {
                            return (
                                <Link
                                 to={"/restaurant/" + restaurant.info.id}
                                 key={restaurant.info.id}
                                >
                                    <RestaurantCard {...restaurant.info} />
                                </Link>
                            )
                        })
                    }
                </div>
            </>
        )
}

export default Body;