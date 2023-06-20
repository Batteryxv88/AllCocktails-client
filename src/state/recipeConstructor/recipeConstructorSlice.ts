
import { createSlice } from '@reduxjs/toolkit';

export interface Ingredients {
  name: string;
  id: string;
}

export interface InitialState {
  ingredients: Ingredients[];
}

const recipeConstructor = createSlice({
  name: 'recipeConstructor',
  initialState: {
    ingredients: [
      
    ],
  } as InitialState,
  reducers: {
    addIngredient: (state, action) => {
      const arrHasElem =  state.ingredients.some(function(elem) {
        return elem.name === action.payload.name
      })
      if (arrHasElem) {
        state.ingredients = state.ingredients;
      } else {
        state.ingredients = [...state.ingredients, action.payload];
      }
    },

    deleteIngredient: (state, action) => {
      state.ingredients = state.ingredients.filter(
        (item) => item.id !== action.payload
      );
    },

    deleteAllIngredient: (state) => {
      state.ingredients = []
    },
  },
});

export default recipeConstructor.reducer;
export const { addIngredient, deleteIngredient, deleteAllIngredient } =
  recipeConstructor.actions;
