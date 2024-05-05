import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantDetail = () =>{
    const [restaurantDetail, setrestaurantDetail] = useState(null);
    const [recomended,setrecomended] = useState(null);
    const {resId} = useParams();

    useEffect(()=>{
        fetchRestaurantDetail();
    },[]);

    const fetchRestaurantDetail = async () => {
        const resDetailApi = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`);
        const resDetailApiJson = await resDetailApi.json();
        setrestaurantDetail(resDetailApiJson?.data?.cards[2]?.card?.card?.info)
        setrecomended(resDetailApiJson?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
    }

    if(restaurantDetail == null) return <Shimmer/>

    const {avgRating, areaName, costForTwoMessage, totalRatingsString} = restaurantDetail
    const {slaString} = restaurantDetail?.sla
 
    return(
        <div>
            <h1>{restaurantDetail?.name}</h1>
            <div>
                <div>{avgRating} ({totalRatingsString}) | {costForTwoMessage}</div>
                <div>Outlet: {areaName}</div>
                <div>{slaString}</div>
            </div>
            <h1>Menu</h1>
            <h3>{recomended?.title}</h3>
            <div>{recomended?.itemCards?.map(item =>{
                return (
                    <ul>
                        <li>{item?.card?.info?.name}</li>
                    </ul>   
                )
            })}</div>
        </div>
    )
}
export default RestaurantDetail;
