import {IMG_URL} from "../utils/Constants";
import '../styles/Card.css';
import star from '../assets/star.png';

const Card = (props) =>{
    const {data} = props;
    const {name,avgRating,costForTwo,cloudinaryImageId,areaName,cuisines,totalRatingsString,sla} = data?.info
    const {slaString,lastMileTravelString} = data?.info?.sla
    return (
        
        <div className="card">
             
            <div className="img-offer-container">
                <img src={`${IMG_URL}${cloudinaryImageId}`}/>
                {data?.info?.aggregatedDiscountInfoV3 === undefined ? 
                <p className= "offerText"></p> : 
                <p className= "offerText">
                    {data?.info?.aggregatedDiscountInfoV3?.header} {data?.info?.aggregatedDiscountInfoV3?.subHeader}
                </p> 
                }                
            </div>
            
            <div className="card-text">
                <p className="card-res-name">{name}</p>
                <p className="card-rating-cost">
                    <p><span className="green-star"><img src={star}/></span> {avgRating} ({totalRatingsString} ratings)</p>
                    <p>{lastMileTravelString}</p>
                </p>
                <p className="card-rating-cost">
                    <p>{costForTwo}</p>
                    <p>{slaString}</p>
                </p>
                <p className="card-location">{areaName}</p>  
            </div>
        </div>
        
    )
}
export default Card;