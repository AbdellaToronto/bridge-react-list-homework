import React, { Component } from 'react';
import Friend from './Friend.js';
import BestFriend from './BestFriend.js';

class FriendsList extends Component {
  render() {
    return (
      <div className="friend-list">
      <div className="all-friends">
      <h1>All Friends</h1>
      {
        this.props.friends.map( (friend) => {
          return <Friend friendName={friend.first} friendSurname={friend.last}/>
        })
      }
      </div>
      <div className="best-friends">
      <h1>Best Friends</h1>
      {
        this.props.friends.map((friend) => {
          if (friend.isBestFriend === true) {
            return <BestFriend friendName={friend.first} friendSurname={friend.last}/>
          }
        })
      }
      </div>
      </div>
    )
  }
}

export default FriendsList;
