import React, { Component } from 'react';
import './App.css';
import FriendsList from './FriendsList'

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

// const ChildComponent = ({anotherArg}) => (
//   <div>
//     <h2>{anotherArg}</h2>
//   </div>
// );
//
// const ParentComponent = ({testArg, ...restProps}) => (
//   <div>
//     {console.log(`restProps: ${restProps}`)}
//     <h2>My favorite argument: {testArg}</h2>
//     <ChildComponent {...restProps}/>
//   </div>
// );

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {friendsArray: allFriends};
  }

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friendsArray}/>
        {/*<ParentComponent testArg="foo" anotherArg="bar"/>*/}
      </div>
    );
  }
}
