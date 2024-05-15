import React from "react";
import { useDispatch, useSelector } from "react-redux";
import star from "../assets/star.png";
import "../styles/Cart.css";
import { IoCloseOutline } from "react-icons/io5";
import { clearCart, removeCartItem } from "../store/cartSlice";

const Cart = () => {
   
  const dispatch = useDispatch();

  const cart = useSelector((store) => store.cart.cartItems);

  const totalCost=(cart.length !== 0 && cart?.reduce((acc,curr)=>acc+((Number(curr?.price || curr?.defaultPrice))/100),0))

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  const handleRemoveCartItems = (id) => {
    dispatch(removeCartItem(id));
  }
  
  return (
    <div className="cart">
      {/* cart-item-list  */}
      <div className="cart-item-list">

        {cart.length !== 0 &&  <button className='clear-cart-btn' onClick={handleClearCart}>Clear Cart</button>}

        <div className="cart-item-container">

          {cart.length === 0 ? <div className="empty-cart"><img src="https://hsnbazar.com/images/empty-cart.png"/></div> : cart?.map((item) => {
            const { name, price, ratings, description, imageId } = item;
            return (
              <div className="cart-item">

                {/* cart-item-text */}
                <div className="cart-item-text">
                  <div>{name}</div>
                  <div>Rs {price / 100} </div>
                  <div>
                    <img src={star} /> &nbsp;
                    {ratings?.aggregatedRating?.rating}(
                    {ratings?.aggregatedRating?.ratingCountV2})
                  </div>
                  <div>{description}</div>
                </div>

                {/* cart-item-img */}
                <div className="cart-item-img">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
                    alt="No Image"
                  />
                </div>

                <div onClick={()=>handleRemoveCartItems(item.id)} style={{border:"1px solid gainsboro",height:"17px",borderRadius:"5px",backgroundColor:"white",color:"gray",cursor:"pointer"}}><IoCloseOutline /></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* cart-billing-info */}
      <div className="cart-billing-info">
        <div className="cart-billing-info-content">
          <div className="checkout-container">
            <div>SubTotal ({cart.length}) Items</div>
            <div style={{display:"flex",justifyContent: "space-between",margin:"3px 0px"}}>
              <span>Item Total</span>
              <span>Rs {cart.length === 0 ? 0 : totalCost }</span>
            </div>
            <div style={{display:"flex",justifyContent: "space-between",margin:"3px 0px"}}>
              <span>Platform fee</span>
              <span>Rs {cart.length === 0 ? 0 : 5 }</span>
            </div>
            <div style={{display:"flex",justifyContent: "space-between",margin:"3px 0px"}}>
              <span>Delivery Fee | 13.7 kms</span>
              <span>Rs {cart.length === 0 ? 0 : 45 }</span>
            </div>
            <div style={{display:"flex",justifyContent: "space-between",margin:"3px 0px"}}>
              <span>GST and Restaurant Charges</span>
              <span>Rs {cart.length === 0 ? 0 : 50 }</span>
            </div>
            <div style={{display:"flex",justifyContent: "space-between"}}>
              <span className="to-pay">To Pay</span>
              <span>Rs {cart.length === 0 ? 0 : (totalCost + 100)}</span>
            </div>
            <button className={cart.length === 0 ? "pay-btn-disabled" : "pay-btn" } disabled={cart.length === 0}>Proceed To Pay</button>
          </div>
          <div>
            <div>Address:</div>
            <div style={{paddingTop:"10px"}}>  
            <p style={{paddingTop:"2px"}}>Street: Blue Moon Apts, Whitefield</p>
            <p style={{paddingTop:"2px"}}>City:   Bangalore, Karnataka</p>
            <p style={{paddingTop:"2px"}}>Phone number:  02225201168</p>
            <p style={{paddingTop:"2px"}}>Zip code:  500071</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
