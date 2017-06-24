import React, { Component } from 'react';
import './App.css';
import Friends from './Friends';
import BestFriends from './BestFriends';
import AverageAge from './AverageAge';

import Chance from 'chance';

const chance = new Chance();



export default class App extends Component {

  constructor () {
      super();
      this.state = {
        friends: []
      }
  }

  componentWillMount() {
    this.loadFriends();
  }

  loadFriends = () => {
    chance.mixin({
      friend: () => ({
          first: chance.first(),
          last: chance.last(),
          age: chance.age(),
          isBestFriend: chance.bool({likelihood: 30})
        })
      });

    const allFriends = Array.from({length: 20}, () => chance.friend());
    this.setState({friends: allFriends});
  }


  render() {
    return (
      <div className="App">

        {/*Make a list of all your friends*/}
        <Friends friendList={this.state.friends} />

        {/*Make a list of just your best friends*/}
        <BestFriends friendList={this.state.friends} />

        {/*Show the average age of your best friends*/}
        <AverageAge friendList={this.state.friends} />
      </div>
    );
  }
}
