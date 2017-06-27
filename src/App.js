import React, { Component } from 'react';
import './App.css';

import Chance from 'chance';

const chance = new Chance();

chance.mixin({
  friend: () => ({
    first: chance.first(),
    last: chance.last(),
    age: chance.age(),
    isBestFriend: chance.bool({likelihood: 30})
  })
});

const allFriends = Array.from({length: 20}, () => chance.friend());

console.log(`allFriends: ${allFriends}`);

const bestFriends = allFriends.filter(friend => friend.isBestFriend);

const calculateAverageAge = (friends) => {
  const sumOfFriendAges = friends.reduce((acc, val) => acc + val.age, 0);
  return sumOfFriendAges / friends.length;
};

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="textArea">
          <h1>Game Over</h1>
          <h2>Final Score</h2>

          {/*Make a list of all your friends*/}
          <h3>My friends:</h3>
          {allFriends.map((friend) => <p>{`${friend.first} ${friend.last}`}</p>)}

          {/*Make a list of just your best friends*/}
          <h3>My best friends:</h3>
          {bestFriends.map((friend) => <p>{`${friend.first} ${friend.last}`}</p>)}

          {/*Show the average age of your best friends*/}
          <h3>Average age of my best friends:</h3>
          {calculateAverageAge(bestFriends)}
        </main>
      </div>
    );
  }
}