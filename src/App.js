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
const ListFriends = (props) => { 
return (<div className="box"><h2>{props.heading}</h2><div className="list-wrapper"><ul>
 { props.friends.map(friend => <li>{`${friend.first} ${friend.last}`}</li>) } 
 </ul> </div></div> )}

 const AverageAge = (props) => {
   return (<div className="box"><h2>avg age</h2><div className="list-wrapper"><p>
    {(props.friends.reduce((acc, curr, i, arr) => acc + curr.age / arr.length, 0)).toFixed(2)}</p></div></div> )
 }


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ListFriends friends={allFriends} heading="all friends" />
        <ListFriends friends={bestFriends} heading="best friends" />
        <AverageAge friends={bestFriends} />
      </div>
    );
  }
}
