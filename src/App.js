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

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <PeopleFilteredByProp array={allFriends} arrayTitle="all friends"/>
        <PeopleFilteredByProp array={bestFriends}  arrayTitle="best friends"/>
        <AverageOfANumInArray array={bestFriends} averagedProp="age" arrayTitle="average age of best friends"/>
      </div>
    );
  }
};

const PeopleFilteredByProp = (props) => {
  return (
    <div>
      <h3>{props.arrayTitle}:</h3>
      { props.array.map((person, i) =>
        <p key={person.first + i}>{person.first} {person.last}, {person.age}</p>)
      }
    </div>
  )
};

const AverageOfANumInArray = (props) => {
  return (
    <div>
      <h3>{props.arrayTitle}:</h3>
      <p>{ props.array.reduce((acc, curr, i, array) => Math.round(acc + curr.age / array.length), 0) }</p>
    </div>
  );
};




