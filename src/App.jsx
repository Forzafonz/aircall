import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import { UserContext } from './Hooks/userContext.jsx';
import MainCallsContainer from './Components/MainCallsContainer.jsx';
import useApplicationData from './Hooks/useApplicationData.jsx';

const App = () => {
// Import state and methods to change state from the
// useApplicationData and then pass them to children components
// using useContext
  const {
    state,
    setActiveTab,
    setArchiveStatus
  } = useApplicationData();

  return (
    <div className='container'>
      <UserContext.Provider value = {{state, setActiveTab, setArchiveStatus}}>
        <Header />
        <MainCallsContainer />
        <Footer />
      </UserContext.Provider>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
