import React, { Component } from 'react';

export default class Friends extends Component {

	render(){
		return(
			<div className="column">
				<h1>List of Friends</h1>
			  {/*<pre>{JSON.stringify(this.props.friendList,null,'  ')}</pre>*/}
				<ul>
					{this.props.friendList.map(friend => <li key={this.props.friendList.indexOf(friend)}>{friend.first} {friend.last} </li>)}
				</ul>

			</div>

		)
	}

}