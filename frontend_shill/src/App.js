import React from 'react';
//components and pages
import Home from './pages/Home';
import Comments from './pages/Comments';
// styles
import GlobalStyles from './components/GlobalStyles';
import {Route} from 'react-router-dom';

function App() {
  
  return (
    <div className='app'>
      <GlobalStyles />
      <Route path={["/coin/:id", "/"]} exact>
        <Home />
      </Route>
      <Route path="/shills" exact component={Comments}>

      </Route>
    </div>
  )

}

export default App;