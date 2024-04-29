import React from "react";
import ReactDOM from "react-dom/client";
import swiggyData from "./swiggyapi";

console.log(swiggyData)

// HEADER
const Header = () => {
    return (
        <div className="header-comp">
            <div>LOGO</div>
            <div className="header-right">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    )
}




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

const Card = (props) =>{
    const {data} = props;
    const {name,avgRating,costForTwo,cloudinaryImageId} = data.info
    return (
        
        <div className="card" style={{backgroundColor:"",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <img width="100%" height="120px"src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}/>
            <p>{name}</p>
            <p>{avgRating}</p>
            <p>{costForTwo}</p>    
        </div>
        
    )
}

// FOOTER
const Footer = () => {
    return (
        <div>Footer</div>
    )
}


const App=()=>{
    return(
      <div className="app">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);