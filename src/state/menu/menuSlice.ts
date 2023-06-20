import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    menuActive: false,
  },

  reducers: {
    setActive: (state) => {
      state.menuActive = !state.menuActive
    }
  },
});

export default menuSlice.reducer;
export const {setActive} = menuSlice.actions