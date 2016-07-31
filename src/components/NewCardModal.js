import {connect} from 'react-redux';

import {addCard} from '../actions/actions';
import CardModal from './CardModal';

const mapStateToProps = (props, router) => {
console.log('NewCardModal',router);
 return {
   card: {
     deckName: router.params.deckName,
     deckId: router.params.deckId
   }
 }
};

const mapDispatchToProps = dispatch => ({
  onSave: card => dispatch(addCard(card))
});

export default connect(mapStateToProps,mapDispatchToProps)(CardModal);

