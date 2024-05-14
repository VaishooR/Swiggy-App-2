import React, { useEffect, useState } from 'react'

const useRestaurantDetail = (resId) => {
    const [restaurantDetail, setrestaurantDetail] = useState(null);
    const [categories, setcategories] = useState(null);
    const [mainCategories, setmainCategories] = useState([]);
    
    useEffect(() => {
      fetchRestaurantDetail();
    }, []);
  
    const fetchRestaurantDetail = async () => {
      const resDetailApi = await fetch(`https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&&submitAction=ENTER&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`);
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

    return { restaurantDetail, mainCategories };
}

export default useRestaurantDetail