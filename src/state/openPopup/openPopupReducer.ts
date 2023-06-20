import { TOGGLE_POPUP, TOGGLE_FORM, POPUP_CLOSED } from './openPopupConst';
import { RootActionsType } from '../rootActionsTypes';
import { type } from 'os';

type DefaultState = {
  isPopupOpen: null | boolean,
  isLoginFormOpen: null | boolean,
  popupState: number
}

const defaultState = {
  isPopupOpen: false,
  isLoginFormOpen: null,
  popupState: 0
};

export const openPopup = (state: DefaultState = defaultState, action: RootActionsType) => {
  switch (action.type) {
    case TOGGLE_POPUP: {
      return state = {
        isPopupOpen: !state.isPopupOpen,
        isLoginFormOpen: true,
        popupState: 0
      };
    }
    case TOGGLE_FORM: {
        return state = {
            isPopupOpen: true,
            isLoginFormOpen: false,
            popupState: 0
          };
    }
    case POPUP_CLOSED: {
      return state = {
        isPopupOpen: false,
        isLoginFormOpen: null,
        popupState: 0
        };
  }
    default: {
      return defaultState;
    }
  }
};
