const ItemList = ({ items = [] }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.card.info.id}>
          <div>
            <span>{data?.name}</span>
            <span>{item?.card?.info?.price}</span>
          </div>
          <p>{item.card.info.description}</p>
        </div>
      ))}
      <span>"This components data is not fetching properly"</span>

      <p>
        The future belongs to those who believe in the beauty of their dreams.
      </p>

      <button className=" font-bold text-orange-600 bg-orange-100 px-5 mt-3 py-1 rounded-xl hover:text-orange-400">
        Add +
      </button>
    </div>
  );
};

export default ItemList;
