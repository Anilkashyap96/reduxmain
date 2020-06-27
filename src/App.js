import React from 'react';
import './App.css';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <h3>I am App component</h3>
      <h3>my name is {props.myname}</h3> 
      <button onClick={() => props.changeName('Suresh')}>Click Me</button>
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
      changeName: (name) =>{
        dispatch({
          type: 'CHANGE_NAME',
          payload: name
        })
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
