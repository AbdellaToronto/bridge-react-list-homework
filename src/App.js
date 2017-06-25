import React, { Component } from 'react';
import './App.css';
import AllFriends from './AllFriends';
import BestFriends from './BestFriends';
import BFAverageAge from './BFAverageAge';

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
const bestFriend = allFriends.filter(friend => (friend.isBestFriend === true));

console.log(allFriends);
console.log(bestFriend);

export default class App extends Component {
  render() {

    return (
      <div className="App">
        <AllFriends allFriends = {allFriends} />
        <BestFriends bestFriend = {bestFriend} />
        <BFAverageAge bestFriend ={bestFriend} />
      </div>
    );
  }
}
