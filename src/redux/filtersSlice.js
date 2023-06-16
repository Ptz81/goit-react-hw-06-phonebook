const { createSlice } = require("@reduxjs/toolkit");

const filterState = { value: '' };
export const filterSlice = createSlice({
  name: 'filters',
  initialState: filterState,
  reducers: {
    setFilterValue(state, action) {
      state.value = action.payload;
    },
  }
})
export const {setFilterValue} = filterSlice.actions
export const filtersReducer = filterSlice.reducer;

