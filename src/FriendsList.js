import React from 'react';
import Friend from './Friend';
// import BestFriend from './BestFriend';

const FriendsList = (props) => {
  return (
  <div className="friend-list">
  {/*Make a list of all your friends*/}
  <div className="all-friends">
  <h1>All Friends</h1>
  {
    props.friends.map((friend) => <Friend
    friendName={friend.first}
    friendSurname={friend.last}
    />)
  }
  </div>
  {/*Make a list of just your best friends*/}
  <div className="best-friends">
  <h1>Best Friends</h1>
  {
    props.friends
    .filter(friend => friend.isBestFriend === true)
    .map((friend) => <Friend
    friendName={friend.first}
    friendSurname={friend.last}/>)
  }
  </div>
  {/*Show the average age of your best friends*/}
  <div className="best-friends-average-age">
  <h3>The average age of my best friends</h3>
  {
    props.friends
    .filter(friend => friend.isBestFriend === true)
    .reduce((acc, current, index, array) => {
        return acc = acc + current.age
    }, 0)
  }
  </div>
  </div>
  )
 }

export default FriendsList;
