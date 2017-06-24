import React, { Component } from 'react';

class Friend extends Component {
  render() {
    return (
      <div className="friend">
      <span>{this.props.friendName} </span>
      <span>{this.props.friendSurname}</span>
      </div>
    )
  }
}

export default Friend;
