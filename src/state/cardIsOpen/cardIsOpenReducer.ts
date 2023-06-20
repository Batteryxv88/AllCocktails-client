import { CARD_TOGGLE } from "./cardIsOpenConst"
import { RootActionsType } from "../rootActionsTypes"
const isOpenState = {
    isOpen: false,
    id: ''
}



export const isCardOpen = (state = '', action: RootActionsType) => {
    switch (action.type) {
        case CARD_TOGGLE: {
            return state = action.cardId
        }
        default: {
            return state
        }
    }
}