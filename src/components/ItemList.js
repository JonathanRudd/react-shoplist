import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../store";

function ItemList() {
  const dispatch = useDispatch();
  const items = useSelector(({ items: { data, searchTerm } }) => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleCarDelete = (item) => {
    dispatch(removeItem(item.id));
  };

  const renderedItems = items.map((item) => {
    return (
      <div key={item.id} className="panel">
        <p>
          {item.name} - {item.cost}円
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(item)}
        >
          delete
        </button>
      </div>
    );
  });

  return (
    <div className="item-list">
      {renderedItems}
      <hr />
    </div>
  );
}

export default ItemList;
