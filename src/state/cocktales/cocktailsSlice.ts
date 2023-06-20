import { createSlice, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { CocktalesArr } from '../../types/cocktails';


interface InitialState {
  data: CocktalesArr[],
  isLoading: boolean,
  error: string | null,
  item: CocktalesArr[]
}

const cocktailsSlice = createSlice({
  name: 'cocktails',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
    item: [],
  } as InitialState ,
  reducers: {
    fetchPostsRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchPostsSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchPostsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    setHome: (state) => {
      state.data = state.data;
    },
  
  },
});

export const fetchCocktails = () => async (dispatch: Dispatch) => {
  dispatch(cocktailsSlice.actions.fetchPostsRequest());
    try {
    const response = await axios.get('/cocktails');
    dispatch(cocktailsSlice.actions.fetchPostsSuccess(response.data));
  } catch (error) {
    dispatch(cocktailsSlice.actions.fetchPostsFailure(error));
  }
};

export default cocktailsSlice.reducer;
export const {setHome, fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure} = cocktailsSlice.actions
