import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header.jsx';
import { UserContext } from './Hooks/userContext.jsx';
import MainCallsContainer from './Components/MainCallsContainer.jsx';
import useApplicationData from './Hooks/useApplicationData.jsx';

const App = () => {
// Import state and methods to change state from the
// useApplicationData and then pass them to children components
// using useContext
  const {
    state,
    setActiveTab
  } = useApplicationData();

  return (
    <div className='container'>
      <UserContext.Provider value = {{state, setActiveTab}}>
        <Header/>
        <MainCallsContainer />
        <div className="container-view">Some activities should be here</div>
      </UserContext.Provider>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
