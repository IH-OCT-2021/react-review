import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetInfo = () => {
  const [catFact, setCatFact] = useState('');
  const [numberOfTimesCatfactWasCalled, setNumberOfTimesCatfactWasCalled] =
    useState(1);

  //   Structure
  //   useEffect( fn, [parameters for calling use effect])

  useEffect(() => {
    axios.get('https://catfact.ninja/fact').then((returnedStuff) => {
      setCatFact(returnedStuff.data.fact);
    });
  }, [numberOfTimesCatfactWasCalled]);

  return (
    <div>
      <p>{catFact}</p>
      <button
        onClick={() =>
          setNumberOfTimesCatfactWasCalled(numberOfTimesCatfactWasCalled + 1)
        }
      >
        Get new Cat fact
      </button>
      <p>You have called this {numberOfTimesCatfactWasCalled} times</p>
    </div>
  );
};

export default GetInfo;
