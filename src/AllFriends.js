import React, { Component } from 'react';
import './App.css';

export default class AllFriends extends Component {
  render() {

    return (
      <div className="AllFriends">
        <h2>My friends are :</h2>
        <ul className="friendsList">
            {/*I mutated the allfriends list by sorting it, but I couldn't add a const to sort my new variable*/}
            {this.props.allFriends
            .sort((a, b) => a.first.toUpperCase() < b.first.toUpperCase() ? -1 : 1 )
            .map((friend, index) => <li key={index}>{`${friend.first} ${friend.last}`}</li> ) }
        </ul>
      </div>
    );
  }
}