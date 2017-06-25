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
const bestFriends = allFriends.filter(friend => friend.isBestFriend);

console.log(allFriends);

export default class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="friendList">
              {/*Make a list of all your friends*/}
              <h1>My Friends</h1>
              <ul>
                  {allFriends.map((friend, index) =>
                      <li key={index}>
                          {friend.first} {friend.last}
                      </li>
                  )}
              </ul>
              {/*Make a list of just your best friends*/}
              <h1>My Best Friends</h1>
              <ul>
                  {bestFriends.map((friend, index) =>
                      <li key={index}>
                          {`${friend.first} ${friend.last}`}
                      </li>
                  )}
              </ul>
              {/*Show the average age of your best friends*/}
              <h1>Average Age of My Best Friends</h1>
              <ul>
                  {bestFriends.reduce((acc, friend) =>
                  acc + friend.age, 0)/allFriends.length} years old
              </ul>
          </div>
      </div>
    );
  }
}
