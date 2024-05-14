import React from 'react'
import AccordionFunc from './Accordion';
import star from '../../assets/star.png';

const MenuCard = ({mainCategories}) => {
  return (
    <div className="resMenu-menuCard">

        <div className="menu">Menu</div>

        {/* Map through the Array that has Category Name and it's dishes */}
        {mainCategories.length === 0 ? <h2 style={{textAlign: 'center'}}>No Results Found</h2> : mainCategories?.map((item) => {
          const title = item?.card?.card?.title;
          const itemCards = item?.card?.card?.itemCards;

          const itemCardsItems = itemCards?.map((item) => {
            const { name, price, ratings, description, imageId } = item?.card?.info;

            // Return Cards for All Dishes in a Category
            return (
              <div className="menu-item">
                <div className="menu-item-text">
                  <div>{name}</div>
                  <div>Rs {price / 100} </div>
                  <div>
                    <img src={star} />
                    {ratings?.aggregatedRating?.rating} (
                    {ratings?.aggregatedRating?.ratingCountV2}
                    )
                  </div>
                  <div>{description}</div>
                </div>
                <div className="menu-img">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
                    alt="No Image"
                  />
                </div>
              </div>
            );
          });

          // Return Accordian for Each Category (and display all its respective dishes)
          return (
            <AccordionFunc title={title} itemCards={itemCards} itemCardsItems={itemCardsItems}/>
          );
        })}

      </div>
  )
}

export default MenuCard