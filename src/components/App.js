import React from 'react';
import {connect} from 'react-redux';

import Sidebar from './Sidebar';
import Toolbar from './Toolbar';

const App = ({deckId,deckName,children}) => {
  console.log('App - children',children);
  return (
    <div className="app">
      <Toolbar deckId={deckId} deckName={deckName}/>
      <Sidebar />
      <h1>{deckName}</h1>
      {children}
    </div>
  )
};

const mapStateToProps = (props, router) => {

  return {
    deckName:router.params.deckName,
    deckId:router.params.deckId
  };
};

export default connect(mapStateToProps)(App);