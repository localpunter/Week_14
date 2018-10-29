import React, { Component, Fragment } from 'react';

class PiggyBank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    }
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
  }

  deposit() {
    this.setState(prevState => {
      return {total: prevState.total + this.props.amount};
    });
  }

  withdraw() {
    this.setState(prevState => {
      if (prevState.total >=this.props.amount)
      return {total: prevState.total - this.props.amount};
    });
  }

  render() {
    return(
      <Fragment>
        <h1>{this.props.title}</h1>
        <p>Total: £{this.state.total}</p>
        <button onClick={this.deposit}>Deposit</button>
        <button onClick={this.withdraw}>Withdraw</button>
      </Fragment>
    )
  }
}

export default PiggyBank;
