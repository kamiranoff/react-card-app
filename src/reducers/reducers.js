import { actionTypes } from './../actions/action_types';
//Cards reducer
export const cards = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_CARD:
      let newCard = Object.assign({}, action.data, {
        score: 1,
        id: +new Date
      });
      return state.concat([newCard]);
    default:
      return state || [];
  }
};

//Deck reducers
export const decks = (state,action) =>{
  switch(action.type) {
    case actionTypes.ADD_DECK:
      let newDeck = {name:action.data, id:+new Date};
      return state.concat([newDeck]);
    default:
      return state || []
  }
};

//Deck reducer
export const addingDeck = (state,action) =>{
  console.log("action.type",action.type);
  switch(action.type) {

    case actionTypes.SHOW_ADD_DECK:
      console.log("showing add deck");
      return true;
    case actionTypes.HIDE_ADD_DECK:
      return false;
    default:
      return !!state;
  }
};
