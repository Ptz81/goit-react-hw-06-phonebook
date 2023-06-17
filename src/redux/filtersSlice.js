const { createSlice } = require("@reduxjs/toolkit");

// const filterState = {
//   value: '',
// };

export const filterSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    setFilterValue:  (_, { payload }) => payload,
  }
})
export const {setFilterValue} = filterSlice.actions
export const filterReducer = filterSlice.reducer;

