import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      const data = action.payload;
      state.list.push({
        id: Math.floor(Math.random() * 1000000),
        data: data,
        edit: true,
      });
    },
    update: (state, action) => {
      const id = action.payload;
      const updateItem = state.list.find((elem) => elem.id === id);
      updateItem.edit = false;
    },
    save: (state, action) => {
      const saveElem = action.payload;
      const updateItem = state.list.find((elem) => elem.id === saveElem.id);
      updateItem.data = saveElem.data;
      updateItem.edit = true;
    },

    remove: (state, action) => {
      const id = action.payload;
      state.list = state.list.filter((item) => item.id !== id);
    },
  },
});
export const { add, remove, update, save } = todoSlice.actions;
export default todoSlice.reducer;
