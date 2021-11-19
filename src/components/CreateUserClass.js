import React, { Component } from 'react';

class CreateUserClass extends Component {
  state = {
    username: '',
    email: '',
    favoriteFood: '',
    hobbies: '',
    favoriteColor: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createNewUser = () => {
    let hobbyArr = this.state.hobbies.split(',');

    const newUser = {
      name: this.state.username,
      email: this.state.email,
      favoriteFood: this.state.favoriteFood,
      favoriteColor: this.state.favoriteColor,
      hobbies: hobbyArr,
    };

    this.props.addNewUser(newUser);
  };

  render() {
    //JS logic goes here
    return (
      <div className='create-user'>
        <h3>Create a new user</h3>
        <label htmlFor='username'>Username</label>
        <input
          name='username'
          placeholder='name'
          value={this.state.username}
          type='text'
          onChange={this.handleChange}
        />
        <label htmlFor='email'>Email address</label>
        <input
          name='email'
          placeholder='test@example.com'
          value={this.state.email}
          type='text'
          onChange={this.handleChange}
        />
        <label htmlFor='food'>Favorite food</label>
        <input
          name='favoriteFood'
          placeholder='salmon'
          value={this.state.favoriteFood}
          type='text'
          onChange={this.handleChange}
        />
        <label htmlFor='hobbies'>Hobbies (separate by comma)</label>
        <input
          name='hobbies'
          placeholder='separate by comma'
          value={this.state.hobbies}
          type='text'
          onChange={this.handleChange}
        />
        <label htmlFor='color'>Favorite Color</label>
        <input
          name='favoriteColor'
          placeholder='your favorite color'
          value={this.state.favoriteColor}
          type='text'
          onChange={this.handleChange}
        />
        <button onClick={this.createNewUser}>Create user</button>
      </div>
    );
  }
}

export default CreateUserClass;
