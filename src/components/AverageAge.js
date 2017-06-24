import React, { Component } from 'react';

export default class AverageAge extends Component {

	componentWillMount(){
		this.calculateAverageAge();
	}

	calculateAverageAge = () => {
		const bestFriends = this.props.friendList.filter(friend => friend.isBestFriend);
		const addAges = bestFriends.reduce( (acc, currentFriend) => {
												return acc + currentFriend.age 
											}, 0);	
		const average = Math.round(addAges/bestFriends.length);
		this.setState({averageAge: average})										
	}


	render(){
		return(
			<div className="column">
				<h1>Average Age of Best Friends</h1>
				<p>{this.state.averageAge}</p>
			</div>
		)
	}


}