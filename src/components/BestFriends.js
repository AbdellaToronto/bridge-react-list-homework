import React, { Component } from 'react';

export default class BestFriends extends Component {

  componentWillMount() {
    this.filterBestFriends();
  }

  filterBestFriends = () => {
    const bestFriends = this.props.friendList.filter(friend => friend.isBestFriend);
    this.setState({bestFriends: bestFriends});
  }


	render(){
		return(
			<div className="column">
				<h1>List of Best Friends</h1>
				<ul>
					{this.state.bestFriends.map(friend => <li key={this.state.bestFriends.indexOf(friend)}>{friend.first} {friend.last}</li>)}
				</ul>

			</div>

		)
	}

}