import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../store";

function ItemList() {
  const dispatch = useDispatch();
  const { items, name } = useSelector(({ form, items: { data, searchTerm } }) => {
    const filteredItems = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      items: filteredItems,
      name: form.name,
    }
  });

  const handleItemDelete = (item) => {
    dispatch(removeItem(item.id));
  };

  const renderedItems = items.map((item) => {
    // decide if item should be bold
    const bold = name && item.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={item.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {item.name} - {item.cost}円
        </p>
        <button
          className="button is-danger"
          onClick={() => handleItemDelete(item)}
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
