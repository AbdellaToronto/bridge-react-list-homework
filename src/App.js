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

const FriendElements = ({ friends, bestFriend }) => <div> <h1>Here is my best friend {bestFriend}</h1> {friends.map(friend => <h2>{friend.first} {friend.last}</h2>)}</div>;

const myObject = {foo: 'hello', bar: 'world', foobar: 'Nick is also really cool'};
const {bar, foo} = myObject;

myObject.foo = 'Nick is unsure';
console.log(foo);

const ChildComp = (props) => (
  <div>
    <h1>{props.foo}</h1>
    <h2>{props.bar}</h2>
  </div>
);

const ParentComp = ({favTA, ...restProps}) => (

  <div>
    {console.log(restProps)}
    <h2>My Favourite TA: {favTA}</h2>
    <ChildComp {...restProps} />
  </div>
);


export default class App extends Component {


  friendMaker() {
    return <h4>friends go here</h4>;
  }

  render() {
    return (
      <div className="App">

        {/*Make a list of all your friends*/}
        {/*<h2>Hello all of my friends</h2>*/}

        <ParentComp favTA="Johanna" {...myObject} />

        {/*<FriendElements friends={allFriends} bestFriend="Della" />*/}


        {/*Make a list of just your best friends*/}

        {/*Show the average age of your best friends*/}

      </div>
    );
  }
}
