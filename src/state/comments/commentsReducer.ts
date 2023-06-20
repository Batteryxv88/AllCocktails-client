import { RootActionsType } from './../rootActionsTypes';
import { ALL_COM } from './commentsConst';
import { CommentType } from '../../types/cocktails';


export const comments = (state = {}, action: RootActionsType) => {
  switch (action.type) {
    case ALL_COM: {
      return state;
    }
    default: {
      return state;
    }
  }
};
