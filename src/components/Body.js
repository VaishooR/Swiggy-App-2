import Card from "./Card";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import '../styles/Body.css';

// BODY
const Body = () => {

    const [restaurantList,setrestaurantList] = useState([]);
    const [searchInput,setsearchInput] = useState("");
    const [searchList,setsearchList] = useState([])

    const handleAllRestaurants = () => {
        setsearchList(restaurantList)
    }
    const handleRatings = () =>{
        const filterRatings = restaurantList.filter(rate => rate.info.avgRating >= 4.3);
        setsearchList(filterRatings);
    }
    const handleCost = () =>{
        const filterCost = restaurantList.filter(item => {
            const costForTwo = Number(item.info.costForTwo.replace(/\D/g, ''));
            return costForTwo < 250; 
        });         
        setsearchList(filterCost);    
    }
    const handleDeliveryTime = () =>{
        const filterDeliveryTime = restaurantList.filter(item =>{
            const deliveryTime = item.info.sla.deliveryTime
            return deliveryTime <= 20;
        });
        setsearchList(filterDeliveryTime)
    }
    const handleNearBy = () => {
        const filterNearBy = restaurantList.filter(item =>{
            const nearBy = item.info.sla.lastMileTravel
            return nearBy <= 3
        })
        setsearchList(filterNearBy)
    }
    const handleSearch = () =>{
        const searchResult = restaurantList.filter( item =>                 // Here we are just filtering the data of "restaurantList" and storing it in a local variable but not updating the "restaurantList" variable.
            item.info.name.toLowerCase().includes(searchInput.toLowerCase())
        )
        setsearchList(searchResult)                                         // So everytime we search something, it is going to filter from the full data which is always available in "restaurantList".
    }

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const swiggyApi = await fetch('https://corsproxy.io/?' + encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"));
        const swiggyApiData = await swiggyApi?.json();
        const restaurantsFromApi = swiggyApiData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setrestaurantList(restaurantsFromApi);                               // We are setting the API value for "restaurantList" variable only once. And never updating it.
        setsearchList(restaurantsFromApi);                                   // We are setting the API value for "searchList".
    }

    return restaurantList.length === 0 ? (< Shimmer/> ) : (
        <div className="body">
            <div className="search-filter">
                
                <div className="filter-comp">
                    <button onClick={handleAllRestaurants}>All Restaurants</button>
                    <button onClick={handleRatings}>Top Ratings</button>
                    <button onClick={handleCost}>Less Cost</button>
                    <button onClick={handleDeliveryTime}>Fast Delivery</button>
                    <button onClick={handleNearBy}>Near By</button>
                </div>
                <div className="search-comp">
                    <input type="text" onChange={(e)=>{setsearchInput(e.target.value)}}/> 
                    <button onClick={handleSearch}>Search</button>
                </div>

            </div>
            
            <div className="cardContainer-comp">
                {searchList.length === 0 && <h1>No Results</h1>}
                {searchList?.map((data)=>(  
                    <Link to={"/restaurants/"+data.info.id} key={data.info.id}><Card data={data} /></Link>                                  // Mapping and displaying "searchList" data.   
                ))}
            </div>      
        </div>
    )
}
export default Body;