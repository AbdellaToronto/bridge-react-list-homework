import React, { Component } from 'react';

class BestFriendsAverageAge extends Component {
  render() {
    return (
      <div className="best-friends-average-age">
      <h3>The average age of my best friends</h3>
      {
        this.props.friends.reduce((acc, current) => {
          return acc + current.age
        }, 0)
      }
      </div>
    )
  }
}

export default BestFriendsAverageAge;
