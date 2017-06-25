import React, { Component } from 'react';
import './App.css';

export default class BestFriends extends Component {
  render() {
    return (
      <div className="BestFriends">
        <h2>BUT my best friends are: </h2>
        <ul className="friendsList">
        {this.props.bestFriend.map((friend, index) =>  <li key={index}>{`${friend.first}`}</li> ) }
        </ul>
      </div>
    );
  }
}