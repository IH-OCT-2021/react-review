import React from 'react';
import ShowUser from './ShowUser';
import CreateUser from './CreateUser';
import GetInfo from './GetInfo';
import { users } from '../users';
import CreateUserClass from './CreateUserClass';

const Main = () => {
  const [fullUserArr, setFullUserArr] = React.useState(users);
  const [userArr, setUserArr] = React.useState(users);
  const [searchbarText, setSearchbarText] = React.useState('');

  React.useEffect(() => {
    let sanitizedText = searchbarText.toLowerCase();
    let newArr = [...fullUserArr];
    newArr = newArr.filter((user) => {
      return user.name.toLowerCase().includes(sanitizedText);
    });
    setUserArr(newArr);
  }, [searchbarText]);

  const resetUsers = () => {
    setUserArr(fullUserArr);
  };

  const searchForUser = () => {
    let sanitizedText = searchbarText.toLowerCase();
    let newArr = [...userArr];
    newArr = newArr.filter((user) => {
      return user.name.toLowerCase().includes(sanitizedText);
    });
    setUserArr(newArr);
  };

  const searchWhileTyping = (val) => {
    setSearchbarText(val);
  };

  const addNewUser = (newUser) => {
    let newArr = [...userArr];
    newArr = newArr.concat(newUser);
    setUserArr(newArr);
    setFullUserArr(newArr);
  };

  const removeUser = (selectedUsername) => {
    let newArr = [...userArr];
    newArr = newArr.filter((person) => {
      return person.name !== selectedUsername;
    });
    setUserArr(newArr);
    setFullUserArr(newArr);
  };

  return (
    <div>
      <h1>Main Component</h1>
      <div className='search-bar'>
        <p>Search</p>
        <input
          name='search'
          placeholder='search names'
          value={searchbarText}
          //   onChange={(e) => setSearchbarText(e.target.value)}
          onChange={(e) => searchWhileTyping(e.target.value)}
        />
        <button onClick={searchForUser}>Go</button>
        <button onClick={resetUsers}>Reset</button>
      </div>
      <div className='display-info'>
        <CreateUser addNewUser={addNewUser} />
        {/* <CreateUserClass addNewUser={addNewUser} /> */}
        {userArr.map((user) => {
          return (
            <ShowUser
              name={user.name}
              email={user.email}
              favoriteFood={user.favoriteFood}
              favoriteColor={user.favoriteColor}
              hobbies={user.hobbies}
              removeUser={removeUser}
            />
          );
        })}
      </div>
      <GetInfo />
    </div>
  );
};

export default Main;
