const { createSlice } = require("@reduxjs/toolkit");

// const filterState = {
//   value: '',
// };

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {filter:''},
  reducers: {
    // setFilterValue: (state, action) => {
    //   state.value = action.payload;
     set: (state, action) => {
      state.filter = action.payload;
    },
  }
})
// export const {setFilterValue} = filterSlice.actions
export const { set } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

