import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {loadCryptos} from './actions/cryptosAction';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCryptos());
  });

  return (
    <div className='app'>
      Hello woyld
    </div>
  )

}

export default App;