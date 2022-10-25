import React from 'react';

function App() {
  return (
    <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
      <img src={process.env.PUBLIC_URL + '/img/funny-programming.gif'} alt="wait until the page loads" />
    </div>
  );
}

export default App;
