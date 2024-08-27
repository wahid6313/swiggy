import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //controled logic

  //unctrolled logic------------------------
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    //uncntrolled logic-----------------
    // setShowItems(!showItems);
    setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-100 p-4   shadow-lg cursor-pointer">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="px-4 font-bold">
            {data.title} ({data.itemCards.length})
          </span>

          <span className="px-4">🔽</span>
        </div>
        {showItems && <ItemList items={data.ItemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
