const { createSlice } = require("@reduxjs/toolkit");


export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
  }
})

export const filtersReducer = filterSlice.reducer;
export const {setFilter} = filterSlice.actions
