import React, { Component } from "react";
import { connect } from "react-redux";

const addAction = {
  type: "ADD"
};

const removeAction = {
  type: "REMOVE"
};

const addActionTen = {
  type: "ADD10"
};

const removeActionTen = {
  type: "REMOVE10"
};

const reset = {
  type: "RESET"
};

class CounterContainer extends Component {
  render() {
    const { adding, dispatch } = this.props;
    return (
      <div>
        <p>{adding}</p>
        <button onClick={() => dispatch(addAction)}>add 1</button>
        <button onClick={() => dispatch(removeAction)}>remove 1</button>
        <button onClick={() => dispatch(addActionTen)}>+10</button>
        <button onClick={() => dispatch(removeActionTen)}>-10</button>
        <button onClick={() => dispatch(reset)}>RESET</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  adding: state
});

const counterComponent = connect(mapStateToProps)(CounterContainer);
export default counterComponent;
