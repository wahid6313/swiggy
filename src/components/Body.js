import React, { useState } from "react";
import { useState, useEffect } from "react";
import ResCard from "./ResCard";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resdata, setListofRest] = useState([]);

  const [searchText, setsearchText] = useState("");

  console.log(resdata);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apidata = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await apidata.json();
   

    setListofRest(
      //optional chaining
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //showing online or offline

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Look like you are Offline!! Please check your internet:</h1>;

  //loading content before when loading body ------------------
  if (resdata.length === 0) return <h1>Loading....</h1>;

  return (
    <div className="container mx-auto">
      <div className=" mt-16 mb-8 ">
        <div className="flex items-center w-full">
          {/*----input text-----*/}
          <input
            type="text"
            placeholder="Try searching words like food or grub..."
            className="w-full h-12 border border-orange-600 pl-10 focus:outline-none"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />

          {/*----search button-----*/}
          <button
            className="bg-orange-500 text-white -m-1 h-12 font-semibold text-md py-2 px-6  hover:bg-orange-400"
            onClick={() => {
              console.log(searchText);

              const filteredRestaurants = resdata.filter((ele) =>
                ele.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setListofRest(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>

        <div className=" mt-10 h-10 place-items-center text-[20px] font-semibold">
          Restaurants with online food delivery in Hyderabad
        </div>

        <div className="mt-1 flex justify-start gap-3">
          {/*---new on swiggy------*/}
          <button className="px-3 py-2 text-sm rounded-3xl border border-white-800 shadow-myShadow active:translate-y-0.5">
            New on Food
          </button>

          {/*---fast delivery----*/}
          <button className="px-3 py-2 text-sm rounded-3xl border border-white-800 shadow-myShadow active:translate-y-0.5">
            Fast Delivery
          </button>

          {/*---pure veg-----*/}
          <button className="px-3 py-2 text-sm rounded-3xl border border-white-800 shadow-myShadow active:translate-y-0.5">
            Pure Veg
          </button>

          {/*----offers------*/}
          <button className="px-3 py-1 text-sm rounded-3xl border border-white-800 shadow-myShadow active:translate-y-0.5">
            Offers
          </button>

          {/*--rs 300 to 600 button------*/}
          <button className="px-3 py-1 text-sm rounded-3xl border border-white-800 shadow-myShadow active:translate-y-0.5">
            Rs. 300-Rs. 600
          </button>

          {/*---less than 300 button--------*/}
          <button
            className="px-3 py-1 text-sm rounded-3xl border border-white-800 shadow-myShadow active:translate-y-0.5"
            onClick={() => {
              try {
                console.log("button clicked");
                const filteredArr = resdata.filter((ele) => {
                  return parseInt(ele.info.costForTwo) < 300;
                });
                console.log(filteredArr);
                setListofRest(filteredArr);
              } catch (error) {
                console.error("Error filtering restaurants:", error);
              }
            }}
          >
            Less than Rs. 300
          </button>

          {/*-----rating button-----*/}
          <button
            className=" px-3 py-1 text-sm rounded-3xl border border-white-800 shadow-myShadow active:translate-y-0.5"
            onClick={() => {
              //onClick == onMouseOver
              console.log("button clicked");
              //filter logic here
              const filteredArr = resdata.filter((ele) => {
                return ele.info.avgRating > 4.3;
              });
              console.log(filteredArr);
              setListofRest(filteredArr);
            }}
          >
            Rating 4.3+
          </button>
        </div>
      </div>

      {/*----card container----*/}
      <div className=" mt-10 mygrid  container mx-auto">
        {
          //--resdata &&--- it is used for live data will fetch from api
          resdata.map((val, ind) => {
            return <ResCard key={val.info.id} data={val} />;
          })
        }
      </div>
    </div>
  );
};

export default Body;
