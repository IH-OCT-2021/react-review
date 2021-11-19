import React from 'react';

const CreateUser = (props) => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [favoriteFood, setFavoriteFood] = React.useState('');
  const [hobbies, setHobbies] = React.useState('');
  const [favoriteColor, setFavoriteColor] = React.useState('');

  const structureNewUserToPushToMain = () => {
    let hobbyArr = hobbies.split(',');

    const newUser = {
      name: username,
      email: email,
      favoriteFood: favoriteFood,
      favoriteColor: favoriteColor,
      hobbies: hobbyArr,
    };

    props.addNewUser(newUser);
  };

  return (
    <div className='create-user'>
      <h3>Create a new user</h3>
      <label htmlFor='username'>Username</label>
      <input
        name='username'
        placeholder='name'
        value={username}
        type='text'
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor='email'>Email address</label>
      <input
        name='email'
        placeholder='test@example.com'
        value={email}
        type='text'
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor='food'>Favorite food</label>
      <input
        name='food'
        placeholder='salmon'
        value={favoriteFood}
        type='text'
        onChange={(e) => setFavoriteFood(e.target.value)}
      />
      <label htmlFor='hobbies'>Hobbies (separate by comma)</label>
      <input
        name='hobbies'
        placeholder='separate by comma'
        value={hobbies}
        type='text'
        onChange={(e) => setHobbies(e.target.value)}
      />
      <label htmlFor='color'>Favorite Color</label>
      <input
        name='color'
        placeholder='your favorite color'
        value={favoriteColor}
        type='text'
        onChange={(e) => setFavoriteColor(e.target.value)}
      />
      <button onClick={structureNewUserToPushToMain}>Create user</button>
    </div>
  );
};

export default CreateUser;
