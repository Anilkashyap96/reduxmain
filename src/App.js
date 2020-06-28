import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import {anotherName, addWish} from './actions/myaction';

function App(props) {
  const mywish = props.mywish.map(item => {
                      return <h3 key={item}>{item}</h3>
                 })

  return (
    <div className="App">
      <h3>I am App component</h3>
      <h3>my name is {props.myname}</h3> 
      {mywish}
      <button onClick={() => props.changeName()}>Click Me</button>
      <button onClick={() => props.addWish()}>Add Wish</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myname: state.name,
    mywish: state.wish
  }
}

const mapDispatchToProps = (dispatch) =>{
    return {
      changeName: () =>{ dispatch(anotherName())},
      addWish:    () => { dispatch(addWish()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
