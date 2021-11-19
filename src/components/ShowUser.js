import React from 'react';

const ShowUser = (props) => {
  const style = {
    backgroundColor: props.favoriteColor,
    color: 'white',
    borderRadius: 18,
    padding: '2%',
  };

  return (
    <div style={style}>
      <h3>{props.name}</h3>
      <p>email: {props.email}</p>
      <p>My favorite food is {props.favoriteFood}</p>
      <p>Hobbies:</p>
      <ul>
        {props.hobbies.map((activity) => {
          return <li>{activity}</li>;
        })}
      </ul>
      <button onClick={() => props.removeUser(props.name)}>Delete user</button>
    </div>
  );
};

export default ShowUser;
