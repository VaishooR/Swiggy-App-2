import Card from "./Card";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import '../styles/Body.css';

// BODY
const Body = () => {

    const [restaurantList,setrestaurantList] = useState([]);
    const [searchInput,setsearchInput] = useState("");
    const [searchList,setsearchList] = useState([]);
    const [showShimmer,setshowShimmer] = useState(false);
    const [activeButton, setActiveButton] = useState('all');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    }

    const handleAllRestaurants = () => {
        setsearchList(restaurantList)
    }
    const handleRatings = () =>{
        setsearchList(restaurantList)
        const filterRatings = restaurantList.filter(rate => rate.info.avgRating >= 4.3);
        setsearchList(filterRatings);
    }
    const handleCost = () =>{
        setsearchList(restaurantList) 
        const filterCost = restaurantList.filter(item => {
            const costForTwo = Number(item.info.costForTwo.replace(/\D/g, ''));
            return costForTwo < 250; 
        });         
        setsearchList(filterCost);    
    }
    const handleDeliveryTime = () =>{
        setsearchList(restaurantList)
        const filterDeliveryTime = restaurantList.filter(item =>{
            const deliveryTime = item.info.sla.deliveryTime
            return deliveryTime <= 20;
        });
        setsearchList(filterDeliveryTime)
    }
    const handleNearBy = () => {
        setsearchList(restaurantList)
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
        window.addEventListener("scroll",handleScroll);
        return ()=> window.removeEventListener("scroll",handleScroll);
    },[])

    const handleScroll = () => {
        if( window.scrollY + window.innerHeight >= document.body.scrollHeight){
            fetchData();
        }
    }

    const fetchData = async () =>{
        setshowShimmer(true)
        const swiggyApi = await fetch("https://foodfire.onrender.com/api/restaurants?lat=12.89960&lng=80.22090&page_type=DESKTOP_WEB_LISTING");
        const swiggyApiData = await swiggyApi?.json();
        const restaurantsFromApi = swiggyApiData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setshowShimmer(false)
        setrestaurantList(restaurantsFromApi);                                  // We are setting the API value for "restaurantList" variable only once. And never updating it.
        // setsearchList(restaurantsFromApi);                                   // We are setting the API value for "searchList".
        setsearchList((searchList)=>[...searchList,...restaurantsFromApi]); 
    }

    // restaurantList.length === 0 ? (< Shimmer/> ) :
    return  (
        <div className="body">
            <div className="search-filter">

                <div className="filter-comp">
                    <button onClick={()=>{handleButtonClick('all');handleAllRestaurants()}}
                        className={activeButton == 'all' ? 'active-filter-btn' : 'filterBtn-inactive'} 
                    >All Restaurants</button>
                    <button onClick={()=>{handleButtonClick('rating');handleRatings()}}
                        className={activeButton == 'rating' ? 'active-filter-btn' : 'filterBtn-inactive'}
                    >Top Ratings</button>
                    <button onClick={()=>{handleButtonClick('cost');handleCost()}}
                        className={activeButton == 'cost' ? 'active-filter-btn' : 'filterBtn-inactive'}>Less Cost</button>
                    <button onClick={()=>{handleButtonClick('delivery');handleDeliveryTime()}}
                        className={activeButton == 'delivery' ? 'active-filter-btn' : 'filterBtn-inactive'}>Fast Delivery</button>
                    <button onClick={()=>{handleButtonClick('near');handleNearBy()}}
                        className={activeButton == 'near' ? 'active-filter-btn' : 'filterBtn-inactive'}>Near By</button>
                </div>
                
                <div className="search-comp">
                    <input type="text" onChange={(e)=>{setsearchInput(e.target.value)}}/> 
                    <button onClick={handleSearch}>Search</button>
                </div>

            </div>
            
            <div className="cardContainer-comp">
                {searchList?.map((data,i)=>(  
                    <Link to={"/restaurants/"+data.info.id} key={i}><Card data={data} /></Link>                                  // Mapping and displaying "searchList" data.   
                ))}
            </div>

            {showShimmer && <Shimmer/>}  
            {searchList.length === 0 && <h1 style={{textAlign: 'center'}}>No Results</h1>}
    
        </div>
    )
}
export default Body;