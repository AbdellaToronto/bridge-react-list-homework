import React from 'react';

const Friend = (props) => {
    return (
      <div className="friend">
      <span>{props.friendName} </span>
      <span>{props.friendSurname}</span>
      </div>
    )
}

export default Friend;
