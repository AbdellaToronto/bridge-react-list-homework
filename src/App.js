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
const bestFriends = allFriends.filter(f=>f.isBestFriend) // !!!??? is it better to keep "this piece of state" here or inside the app compo?

console.log(allFriends);

export default class App extends Component {
  render() {
    return (
      <div className="App">

        {/*Make a list of all your friends*/}
        <h1> Make a list of all your friends </h1>
        {allFriends.map(friend=><div>{`${friend.first} ${friend.last}`}</div>)}

        {/*Make a list of just your best friends*/}
        <h1> Make a list of just your best friends </h1>
        {bestFriends.map(friend=><div>{`${friend.first} ${friend.last}`}</div>)}


        {/*Show the average age of your best friends*/}
        <h1> Show the average age of your best friends: {bestFriends.reduce((acc, {age}, i, arr)=> acc+age/arr.length, 0)} </h1>
        {/* !!!??? is it cool to use arr.length? if I used bestfriends.length is it less pure? */}

      </div>
    );
  }
}
