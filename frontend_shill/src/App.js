import React from 'react';
//components and pages
import Home from './pages/Home';
// styles
import GlobalStyles from './components/GlobalStyles';

function App() {
  
  return (
    <div className='app'>
      <GlobalStyles />
      <Home />
    </div>
  )

}

export default App;