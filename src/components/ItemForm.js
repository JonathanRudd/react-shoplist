import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addItem } from "../store";

function ItemForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };

  const handleCostChange = (e) => {
    const itemCost = parseInt(e.target.value) || 0;
    dispatch(changeCost(itemCost));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem({ name, cost }));

  }


  return (
    <div className="item-form panel">
      <h4 className="subtitle is-3">Add an Item</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
            className="input is-expanded"
            value = {name}
            onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
            className="input is-expanded"
            value = {cost || ""}
            onChange={handleCostChange}
            type="number"
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ItemForm;
