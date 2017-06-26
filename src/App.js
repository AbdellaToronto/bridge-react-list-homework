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
  renderFriends(friends) {
    return (
      <div>
        <h3>My friends: </h3>
        {friends.map((friend) => <p>{`${friend.first} ${friend.last}`}</p>)}
      </div>
    );
  }

  renderBestFriends(friends) {
    return (
      <div>
        <h3>My best friends: </h3>
        {
          friends.map((friend) => {
            return friend.isBestFriend 
              ? <p>{`${friend.first} ${friend.last}`}</p> 
              : null;
          })
        }
      </div>
    );
  }

  renderAvgAgeOfBestFriends(friends) {
    return (
      <div>
        <h3>The average age of my best friends: </h3>
        {
          friends.reduce((acc, val) => val.isBestFriend 
            ? acc + val.age 
            : acc
            , 0
          ) / 
          friends.reduce((acc, val) => val.isBestFriend 
            ? acc + 1 
            : acc
            , 0
          )
        }
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        {/*Make a list of all your friends*/}
        {this.renderFriends(allFriends)}

        {/*Make a list of just your best friends*/}
        {this.renderBestFriends(allFriends)}

        {/*Show the average age of your best friends*/}
        {this.renderAvgAgeOfBestFriends(allFriends)}

      </div>
    );
  }
}
