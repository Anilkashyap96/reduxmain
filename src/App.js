import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import {anotherName} from './actions/myaction';

function App(props) {
  return (
    <div className="App">
      <h3>I am App component</h3>
      <h3>my name is {props.myname}</h3> 
      <button onClick={() => props.changeName()}>Click Me</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myname: state.name
  }
}

const mapDispatchToProps = (dispatch) =>{
    return {
      changeName: () =>{ dispatch(anotherName())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
