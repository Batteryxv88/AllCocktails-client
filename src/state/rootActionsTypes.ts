
import { SetAllComments } from './comments/commentsActions';
import { PopupToggle, FormToggle, PopupClosed } from "./openPopup/openPopupActions"
import { CardToggle } from "./cardIsOpen/cardIsOpenActions"



export type RootActionsType = PopupToggle | PopupClosed | FormToggle | CardToggle | SetAllComments 