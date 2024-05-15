import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Offers from "./components/Offers";
import Error from "./components/Error";
import RestaurantDetail from "./components/RestaurantDetail";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import Cart from "./components/Cart";

const App=()=>{
    return(
      <Provider store={appStore}>
        <div className="app">
          <Header/>
          <Outlet/>
          <Footer/>
        </div>
      </Provider> 
    )
}

const appRouter = createBrowserRouter([
  { path:"/", 
    element: <App/>,
    children: [
      { path:"/", element: <Body/>},
      { path:"/about", element: <About/>},
      { path:"/offers", element: <Offers/>},
      { path:"/contact", element: <Contact/>},
      { path:"/cart", element: <Cart/>},
      { path:"/restaurants/:resId", element: <RestaurantDetail/>}
    ],
    errorElement:<Error/>
  }  
])


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);