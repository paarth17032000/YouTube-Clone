import React from 'react';
import './App.css';
import Header from './components/header';
import Search from './components/search';


function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <div className="container pt-5">
        <div className="col-sm-8">
          {/* yt-big vid */}
          header
          <hr></hr>
        </div>
        <div className="col-sm-4">
          {/* yt-small */}
          header
          <hr></hr>
        </div>
        <div className="">
          {/* yt-details */}
        </div>
      </div>
    </div>
  );
}

export default App;
