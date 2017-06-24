import React, { Component } from 'react';

class BestFriend extends Component {
  render() {
    return (
      <div className="best-friend">
      <span>{this.props.friendName} </span>
      <span>{this.props.friendSurname}</span>
      </div>
    )
  }
}

export default BestFriend;
