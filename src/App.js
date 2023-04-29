import React from 'react'
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import aboutimage from './images/about2.png';

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About image={aboutimage} title="Comes with all you need for you Pets!" button="Download Now" />

    </div>
  );
}

export default App;
