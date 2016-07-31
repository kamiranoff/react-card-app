import React,{ Component } from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import {addDeck, showAddDeck, hideAddDeck} from './../actions/actions';
/*
 //Data
 decks={state.decks}
 addingDeck={state.addingDeck}


 //functions that change store
 addDeck={name => store.dispatch(addDeck(name))}
 showAddDeck={() => store.dispatch(showAddDeck())}
 hideAddDeck={() => store.dispatch(hideAddDeck())}
 */

//

class Sidebar extends Component {

  _createDeck(evt){
    if (evt.which !== 13){
      return;
    }
    console.log(this);
    var name = ReactDom.findDOMNode(this.refs.add).value;
    this.props.addDeck(name);
    this.props.hideAddDeck();
  }

  componentDidUpdate(){
    var el = ReactDom.findDOMNode(this.refs.add);
    if(el) {
      el.focus();
    }
  }

  render() {
    let props = this.props;
    console.log('props',props);


    return(
      <div className="sidebar">
        <h2>All Decks</h2>

        <ul>
          {props.decks.map((deck,i) =>
            <li key={i}>
              <Link to={`/deck/${deck.name}/${deck.id}`} >{deck.name}</Link>
            </li>
          )}
        </ul>
        {props.addingDeck && <input ref="add" onKeyPress={this._createDeck.bind(this)} />}
      </div>
    )
  }
}

const mapStateToProps = ({decks,addingDeck}) => ({
  decks,
  addingDeck
});

const mapDispatchToProps = (dispatch) => ({
  addDeck : (name) => dispatch(addDeck(name)),
  showAddDeck:() => dispatch(showAddDeck()),
  hideAddDeck:() => dispatch(hideAddDeck())
});


export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);