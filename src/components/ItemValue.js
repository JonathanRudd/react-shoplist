import { useSelector } from 'react-redux';


function ItemValue() {
  const totalCost = useSelector(({ items: { data, searchTerm }}) =>
    data
    .filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .reduce((acc, item) => acc + item.cost, 0)
  );

  return (
    <div className="item-value">
      Total Cost: {totalCost}円
    </div>
  );
}

export default ItemValue;
