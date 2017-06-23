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

console.log(allFriends);

export default class App extends Component {
  render() {
    return (
      <div className="App">

        {/*Make a list of all your friends*/}

        {/*Make a list of just your best friends*/}

        {/*Show the average age of your best friends*/}

      </div>
    );
  }
}
