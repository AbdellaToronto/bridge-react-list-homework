import React, { Component } from 'react';
import './App.css';

export default class BFAverageAge extends Component {
  render() {
    return (
      <div className="BFAverageAge">
        <span>The average age of my best friends is: </span>
        <p>{this.props.bestFriend.reduce((total, friend)=> {
          return (total + friend.age)
        }, 0) / this.props.bestFriend.length}</p>
      </div>
    );
  }
}