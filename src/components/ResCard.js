import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  // const {ResName,cuisine} = props;
  const { data } = props;

  const {
    name,
    cuisines,
    areaName,
    cloudinaryImageId,
    avgRating,
    sla: { deliveryTime },
  } = data.info;

  const displayCuisines = cuisines.slice(0, 3).join(", ");
  const otherCuisinescount = cuisines.length - 3;

  return (
    <div className=" rounded-3xl truncate  hover:scale-95 transition-all  overflow-hidden">
      {/*-------card image------*/}
      <img
        alt="no image"
        className="w-full h-52 rounded-3xl object-cover shadow-myShadow border border-none overflow-hidden"
        src={CDN_URL + cloudinaryImageId}
      />

      {/*----card details-----*/}
      <div className="pl-4 mt-2 ">
        <h3 className="truncate text-lg font-medium">{name}</h3>
        <div className="flex gap-x-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-white fill-white bg-green-600 rounded-full py-0.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
          <span className="text-base"> {avgRating} &#x2022;</span>
          <span className="text-base">{deliveryTime} mins </span>
        </div>
        <h4 className="truncate text-gray-500">
          {displayCuisines}
          {otherCuisinescount}
        </h4>
        <h5 className="text-gray-500"> {areaName}</h5>
      </div>
    </div>
  );
};

export default ResCard;
