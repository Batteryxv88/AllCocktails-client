import { CARD_TOGGLE } from './cardIsOpenConst';

export const cardToggle = (cardId: string) => ({
  type: CARD_TOGGLE,
  cardId,
});


export type CardToggle = {
  type: typeof CARD_TOGGLE,
  cardId: string,
}