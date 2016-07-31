import { actionTypes } from './action_types';
//ACTIONS
export const addDeck = (name) => ({type: actionTypes.ADD_DECK,data:name});
export const showAddDeck = () => ({type: actionTypes.SHOW_ADD_DECK});
export const hideAddDeck = () => ({type: actionTypes.HIDE_ADD_DECK});

export const addCard = (card) => ({type: actionTypes.ADD_CARD,data:card});