import { configureStore } from "@reduxjs/toolkit";
import {
  itemsReducer,
  addItem,
  removeItem,
  changeSearchTerm,
} from "./slices/itemSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";


const store = configureStore({
  reducer: {
    items: itemsReducer,
    form: formReducer,
  },
});

export {
  store,
  changeName,
  changeCost,
  addItem,
  removeItem,
  changeSearchTerm,
}
