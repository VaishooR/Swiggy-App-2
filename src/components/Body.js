import swiggyData from "../utils/swiggyData.js";
import Card from "./Card";
import {useState,useEffect} from "react";

// BODY
const Body = () => {
    const [restaurantList,setrestaurantList] = useState(swiggyData);

    const handleAllRestaurants = () => {
        const allRestaurants = swiggyData
        setrestaurantList(allRestaurants)
    }
    const handleRatings = () =>{
        setrestaurantList(swiggyData)
        const filterRatings = swiggyData.filter(rate => rate.info.avgRating >= 4.3);
        setrestaurantList(filterRatings);
    }
    const handleCost = () =>{
        setrestaurantList(swiggyData)
        const filterCost = swiggyData.filter(item => {
            const costForTwo = Number(item.info.costForTwo.replace(/\D/g, ''));
            return costForTwo < 250;
        });         
        setrestaurantList(filterCost);
    }
    const handleDeliveryTime = () =>{
        setrestaurantList(swiggyData)
        const filterDeliveryTime = swiggyData.filter(item =>{
            const deliveryTime = item.info.sla.deliveryTime
            return deliveryTime <= 30;
        });
        setrestaurantList(filterDeliveryTime)
    }

    useEffect(()=>{},[restaurantList])
    
    return (
        <div className="body">
            <div className="search-comp">
                <input/>
                <button>Search</button>
            </div>
            <div>
                <button onClick={handleAllRestaurants}>All Restaurants</button>
                <button onClick={handleRatings}>Top Ratings</button>
                <button onClick={handleCost}>Less Cost</button>
                <button onClick={handleDeliveryTime}>Less Delivery Time</button>
            </div>
            <div className="cardContainer-comp">
                {restaurantList.map((data)=>(
                    <Card data={data} key={data.info.id}/>
                ))}
            </div>      
        </div>
    )
}
export default Body;