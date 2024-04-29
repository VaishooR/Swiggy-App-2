import {IMG_URL} from "../utils/Constants";

const Card = (props) =>{
    const {data} = props;
    const {name,avgRating,costForTwo,cloudinaryImageId} = data.info
    return (
        
        <div className="card" style={{backgroundColor:"",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <img width="100%" height="120px"src={`${IMG_URL}${cloudinaryImageId}`}/>
            <p>{name}</p>
            <p>{avgRating}</p>
            <p>{costForTwo}</p>    
        </div>
        
    )
}
export default Card;