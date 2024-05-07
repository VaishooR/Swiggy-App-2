import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import star from "../assets/star.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import "../styles/RestaurantDetail.css";


const RestaurantDetail = () => {
  const [restaurantDetail, setrestaurantDetail] = useState(null);
  const [categories, setcategories] = useState(null);
  const [mainCategories, setmainCategories] = useState([]);

  const { resId } = useParams();

  useEffect(() => {
    fetchRestaurantDetail();
  }, []);

  const fetchRestaurantDetail = async () => {
    const resDetailApi = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`);
    const resDetailApiJson = await resDetailApi?.json();
    setrestaurantDetail(resDetailApiJson?.data?.cards[2]?.card?.card?.info);
    setcategories(resDetailApiJson?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  };

  useEffect(() => {
    if (categories) {
        const validmainCategory = categories.filter(
          (item) =>
            item?.card?.card?.title &&
            !item?.card?.card?.categories &&
            item?.card?.card?.itemCards
        );
        setmainCategories(validmainCategory);
      }
  },[categories])

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
      <div className="resMenu-menuCard">

        <div className="menu">Menu</div>

        {/* Map through the Array that has Category Name and it's dishes */}
        {mainCategories.length === 0 ? <h2 style={{textAlign: 'center'}}>No Results Found</h2> : mainCategories?.map((item) => {
          const title = item?.card?.card?.title;
          const itemCards = item?.card?.card?.itemCards;

          const itemCardsItems = itemCards?.map((item) => {

            // Return Cards for All Dishes in a Category
            return (
              <div className="menu-item">
                <div className="menu-item-text">
                  <div>{item?.card?.info?.name}</div>
                  <div>Rs {item?.card?.info?.price / 100} </div>
                  <div>
                    <img src={star} />
                    {item?.card?.info?.ratings?.aggregatedRating?.rating} (
                    {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}
                    )
                  </div>
                  <div>{item?.card?.info?.description}</div>
                </div>
                <div className="menu-img">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId}`}
                    alt="No Image"
                  />
                </div>
              </div>
            );
          });

          // Return Accordian for Each Category (and display all its respective dishes)
          return (
            <div>
              <Accordion defaultExpanded className="accordian">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography ><span className="accordian-title">{title} ({itemCards.length})</span></Typography>
                </AccordionSummary>
                <AccordionDetails>{itemCardsItems}</AccordionDetails>
              </Accordion>
            </div>
          );
        })}

      </div>

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
