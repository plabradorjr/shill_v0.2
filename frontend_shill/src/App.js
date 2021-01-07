import React from 'react';
//components and pages
import Home from './pages/Home';
// styles
import GlobalStyles from './components/GlobalStyles';
import {Route} from 'react-router-dom';

function App() {
  
  return (
    <div className='app'>
      <GlobalStyles />
      <Route path={["/coin/:id", "/"]}>
        <Home />
      </Route>
    </div>
  )

}

export default App;