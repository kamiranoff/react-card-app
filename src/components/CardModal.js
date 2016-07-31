//Presentational Component
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link,browserHistory} from 'react-router';

class CardModal extends Component {

  constructor() {
    super();

    this._onDelete = this._onDelete.bind(this);
    this._onSave = this._onSave.bind(this);
  }
  _onSave(evt) {
    var front = ReactDom.findDOMNode(this.refs.front);
    var back = ReactDom.findDOMNode(this.refs.back);


    //Create a new object
    //Copy original this.props.card
    //and update front and back values.
    // Allow to create or update a card
    this.props.onSave(Object.assign({},this.props.card, {
      front: front.value,
      back: back.value
    }));
    browserHistory.push(`/deck/${this.props.card.deckName}/${this.props.card.deckId}`)
  }

  _onDelete(e) {
    this.props.onDelete(this.props.card.id);
    browserHistory.push(`/deck/${this.props.card.deckName}/${this.props.card.deckId}`)
  }

  componentDidUpdate(){
    ReactDom.findDOMNode(this.refs.front).focus()
  }

  render() {
    let {card,onDelete} = this.props;

    return(
      <div className="modal">
        <h1>{ onDelete ? 'Edit' : 'New'} Card</h1>
        <label >Card Front: </label>
        <textarea ref='front' defaultValue={card.front}></textarea>
        <label >Card Back: </label>
        <textarea ref='back' defaultValue={card.back}></textarea>
        <p>
          <button onClick={this._onSave}>Save Card</button>
          <Link className="btn"
                to={`/deck/${card.deckName}/${card.deckId}`} >
            Cancel
          </Link>
          {onDelete ? <button onClick={this._onDelete} className="delete">Delete Card</button> : null}
        </p>
      </div>
    );
  }
}

export default CardModal;