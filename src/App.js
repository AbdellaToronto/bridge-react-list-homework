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
const Friends = (props) => {
return (<section>
  <h1>All Friends</h1>
  {props.friends.map(friend => <h3>{friend.first}</h3>)}
</section>)
}
const BestFriends = (props) => {
return (<section>
  <h1>Best Friends</h1>
  {props.friends.filter(friend => friend.isBestFriend)
                               .map(bestFriend => <h3>{bestFriend.first}</h3>)
  }
</section>)
}

const AverageAge = (props) => {
  return (<section>
      <h1>Average Friend Age</h1>
      <h3>{props.friends.reduce((acc, curr) => acc + curr.age, 0)/props.friends.length}</h3>
    </section>)
}

console.log(allFriends);

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {<Friends friends={allFriends}/>}
        {<BestFriends friends={allFriends}/>}
        {<AverageAge friends={allFriends}/>}
      </div>
    );
  }
}
