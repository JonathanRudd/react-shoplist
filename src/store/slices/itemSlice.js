import { createSlice, nanoid } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",

  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addItem(state, action) {
      // assumption: action.payload looks like { name: "foo", cost: 123 }
      state.data.push( {
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeItem(state, action) {
      // assumption: action.payload === id we want to remove
      const updated = state.data.filter((item) => item.id !== action.payload);
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addItem, removeItem } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;
