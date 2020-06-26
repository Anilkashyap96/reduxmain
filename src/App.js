import React from 'react';
import './App.css';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <h3>I am App component</h3>
      <h3>my name is {props.myname}</h3> 
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myname: "Ramesh"
  }
}

export default connect(mapStateToProps)(App);
