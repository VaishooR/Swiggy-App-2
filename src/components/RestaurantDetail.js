import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import star from "../assets/star.png";
import "../styles/RestaurantDetail.css";
import useRestaurantDetail from '../hooks/useRestaurantDetail';
import MenuCard from "./smallComponents/MenuCard";

const RestaurantDetail = () => {
  const { resId } = useParams();
  const { restaurantDetail, mainCategories } = useRestaurantDetail(resId);

  if (restaurantDetail == null) return <Shimmer />;

  const {avgRating,areaName,costForTwoMessage,totalRatingsString,cuisines} = restaurantDetail;
  const { slaString } = restaurantDetail?.sla;

  return (
    <div className="resMenu-container">

      {/* Restaurant Name */}
      <h2 className="resMenu-title">{restaurantDetail?.name}</h2>

      {/* Restaurant Information */}
      <div className="resMenu-details">
        <div> <img src={star} />  {avgRating} ({totalRatingsString}) | {costForTwoMessage} </div>
        <div> {cuisines?.join(", ")} </div>
        <div> Outlet: {areaName} </div>
        <div> {slaString} </div>
      </div>

      {/* Menu Card */}
      <MenuCard mainCategories={mainCategories}/>
      
    </div>
  );
};
export default RestaurantDetail;


















  // const validSubCategory = categories.filter(item => item.card.card.title && item.card.card.categories);
  // console.log('validSubCategory', validSubCategory)

{
  /* <span className="menu-item-offer">{item?.card?.info?.offerTags[0]?.title || ""} {item?.card?.info?.offerTags[0]?.subTitle || ""} </span> */
}


    // setrecomended(
    //   resDetailApiJson?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    // );

{
  /* <div>
<Accordion defaultExpanded className="acc">
  <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1-content"
    id="panel1-header"
  >
    <Typography>{recomended?.title} ({recomended?.itemCards?.length})</Typography>
  </AccordionSummary>
  <AccordionDetails>
  {recomended?.itemCards?.map(item =>{
                    return (
                        <div className="menu-item">
                            <div className="menu-item-text">
                                <div>{item?.card?.info?.name}</div>
                                <div>Rs {item?.card?.info?.price/100}  </div>
                                <span className="menu-item-offer">{item?.card?.info?.offerTags[0]?.title || ""} {item?.card?.info?.offerTags[0]?.subTitle || ""} </span>
                                <div><img src={star}/> {item?.card?.info?.ratings?.aggregatedRating?.rating} ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</div>
                                <div>{item?.card?.info?.description}</div>
                            </div>
                            <div className="menu-img">
                                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId}`}/>
                            </div>  
                        </div>   
                    )
                })}
  </AccordionDetails>
</Accordion>


</div> */
}

// {mainCategories?.map(item => {
//     const title=item?.card?.card?.title;
//     const aaa=item?.card?.card?.itemCards
//     const bbb=aaa?.map(subitem => <p>{subitem?.card?.info?.name}</p>)
//     return (
//         <div>
//             <h2>{title}</h2>
//             <div>{bbb}</div>
//         </div>
//     )
// })}

{
  /* <Accordion className="acc">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                      >
                        <Typography>{recomended?.title} ({recomended?.itemCards?.length})</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                      {recomended?.itemCards?.map(item =>{
                                        return (
                                            <div className="menu-item">
                                                <div className="menu-item-text">
                                                    <div>{item?.card?.info?.name}</div>
                                                    <div>Rs {item?.card?.info?.price/100}  </div>
                                                    <span className="menu-item-offer">{item?.card?.info?.offerTags[0]?.title || ""} {item?.card?.info?.offerTags[0]?.subTitle || ""} </span>
                                                    <div><img src={star}/> {item?.card?.info?.ratings?.aggregatedRating?.rating} ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</div>
                                                    <div>{item?.card?.info?.description}</div>
                                                </div>
                                                <div className="menu-img">
                                                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId}`}/>
                                                </div>  
                                            </div>   
                                        )
                                    })}
                      </AccordionDetails>
                    </Accordion> */
}

{
  /* <div className="menu-subtitle">{recomended?.title} ({recomended?.itemCards?.length})</div>
            <div>{recomended?.itemCards?.map(item =>{
                return (
                    <div className="menu-item">

                        <div className="menu-item-text">
                            <div>{item?.card?.info?.name}</div>
                            <div>Rs {item?.card?.info?.price/100}  </div>
                            <span className="menu-item-offer">{item?.card?.info?.offerTags[0]?.title || ""} {item?.card?.info?.offerTags[0]?.subTitle || ""} </span>
                            <div><img src={star}/> {item?.card?.info?.ratings?.aggregatedRating?.rating} ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</div>
                            <div>{item?.card?.info?.description}</div>
                        </div>
                        <div className="menu-img">
                            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId}`}/>
                        </div>
                        
                    </div>   
                )
            })}
</div> */
}
