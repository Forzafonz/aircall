import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header.jsx';
import useApplicationData from './Hooks/useApplicationData.jsx';

const App = () => {

  const {
  } = useApplicationData();

  return (
    <div className='container'>
      <Header/>
      <div className="container-view">Some activities should be here</div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
