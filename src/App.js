import React, { Component } from 'react';
import './App.css';
import FriendsList from './FriendsList.js'
import BestFriendsAverageAge from './BestFriendsAverageAge.js'

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
  constructor(props) {
    super(props);
    this.state = {friendsArray: allFriends};
  }

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friendsArray}/>
        <BestFriendsAverageAge friends={this.state.friendsArray}/>

        {/*Make a list of all your friends*/}

        {/*Make a list of just your best friends*/}

        {/*Show the average age of your best friends*/}

      </div>
    );
  }
}
