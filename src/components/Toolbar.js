import React,{ Component } from 'react'
import {connect} from 'react-redux';
import {showAddDeck,hideAddDeck} from './../actions/actions';
import {Link} from 'react-router';

class Toolbar extends Component {

  constructor(props){
    super(props);
    console.log('Toolbar - Constructor - props: ',props);
  }

  _showOrHideDeck(){
    if(this.props.addingDeck){
      this.props.hideAddDeck()

    }else{
      this.props.showAddDeck()
    }
  }

  _showDeckTools() {
    if(this.props.deckId){
      return (<div>
        <Link className="btn"
              to={`/deck/${this.props.deckName}/${this.props.deckId}/new`}>+ New Card
        </Link>
        <Link className="btn"
              to={`/deck/${this.props.deckName}/${this.props.deckId}/study`}>
          StudyDeck
        </Link>
      </div>)
    }else{
      return null;
    }
  };

  render() {

    const buttonText = this.props.addingDeck ? '- Hide Deck' : '+ Add Deck';
    return (
      <nav className="toolbar">
        <div>
          <button onClick={this._showOrHideDeck.bind(this)}> {buttonText}  </button>
        </div>
        {this._showDeckTools()}
      </nav>
    )
  }
};

const mapStateToProps = ({addingDeck}) => ({
  addingDeck
});

const mapDispatchToProps = (dispatch) => ({
  showAddDeck: () => dispatch(showAddDeck()),
  hideAddDeck: () => dispatch(hideAddDeck())
});

export default connect(mapStateToProps,mapDispatchToProps)(Toolbar);