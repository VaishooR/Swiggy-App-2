import swiggyData from "../utils/swiggyData.js";
import Card from "./Card";

// BODY
const Body = () => {
    return (
        <div className="body">
            <div className="search-comp">
                <input/>
                <button>Search</button>
            </div>
            <div className="cardContainer-comp">
                {swiggyData.map((data)=>(
                    <Card data={data} key={data.info.id}/>
                ))}
            </div>      
        </div>
    )
}
export default Body;