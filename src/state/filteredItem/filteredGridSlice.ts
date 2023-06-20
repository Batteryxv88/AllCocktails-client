import { createSlice } from '@reduxjs/toolkit';

const filteredGridSlice = createSlice({
  name: 'filteredGrid',
  initialState: {
    filter: 'All',
  },

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload
    }
  },
});

export default filteredGridSlice.reducer;
export const {setFilter} = filteredGridSlice.actions
