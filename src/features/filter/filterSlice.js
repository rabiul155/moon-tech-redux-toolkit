import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brands: [],
  stock: false,
  keyword: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggle: (state) => {
      state.stock = !state.stock;
    },
    toggleBrand: (state, action) => {
      if (!state.brands.includes(action.payload)) {
        state.brands.push(action.payload);
      } else {
        state.brands = state.brands.filter((brand) => brand !== action.payload);
      }
    },
  },
});

export const { toggle, toggleBrand } = filterSlice.actions;

export default filterSlice.reducer;
