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

/* not sure the best place to define the following? 
defined these here for the purpose of avoiding repetitive html in render section */

/* arrays of friend objects */
const allFriends = Array.from({length: 20}, () => chance.friend());
const bestFriends = allFriends.filter(friend => friend.isBestFriend);

/* function: [friend] => [element object] */
const listFriends = (friends) => friends.map(friend => <li className="friend">{`${friend.first} ${friend.last}`}</li>);

/* arrays of element objects */
const listAllFriends = listFriends(allFriends);
const listBestFriends = listFriends(bestFriends);
const averageAgeBestFriends = (bestFriends.reduce((acc, curr, i, arr) => acc + curr.age / arr.length, 0)).toFixed(2);

/* array of headings with corresponding element object array */
const listAndHeadings = [["all my friends",listAllFriends],["my best friends",listBestFriends],["avg age",averageAgeBestFriends]];

export default class App extends Component {
  render() {
    return (
      <div className="App">
        { listAndHeadings.map((list) => 
          { return <div className="box"><h2>{list[0]}</h2><div className="list-wrapper"><ul>{list[1]}</ul></div></div> }
        )}
      </div>
    );
  }
}
