import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const [showIndex, setShowIndex] = useState(0);

  // const { id } = useParams();
  // console.log(params);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API);

    const json = await data.json();
    // console.log(json);
    setResInfo(json.data);
  };

  const restaurantInfo = resInfo?.cards?.find((card) => card.card?.card?.info)
    ?.card?.card?.info;
  const { name, costForTwo, cuisines } = restaurantInfo || {};

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="text-center my-8">
      <h1 className=" font-bold  mb-3 text-3xl">{name}</h1>
      <h2 className="font-bold mb-5">
        {cuisines?.join(", ")} - {costForTwo / 100}
      </h2>
      {categories?.length > 0 ? (
        categories.map((category, index) => (
          <RestaurantCategory
            data={category?.card?.card}
            key={index}
            category={category}
            showItems={index == showIndex ? true : false} //contorlled components
            setShowIndex={() => setShowIndex(index)}
          />
        ))
      ) : (
        <p>No categories available.</p>
      )}
    </div>
  );
};
// const apidata = () => {};

export default RestaurantMenu;
