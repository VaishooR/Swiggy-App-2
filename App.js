import React from "react";
import ReactDOM from "react-dom/client";

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

const Card = () =>{
    return(
        <div className="card">
            <img width="100%" height="120px"src="https://glebekitchen.com/wp-content/uploads/2019/12/chickenbiryanibowltop.jpg"/>
            <p>Briyani</p>
            <p>4 stars</p>
            <p>Rs 250</p>
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
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>      
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