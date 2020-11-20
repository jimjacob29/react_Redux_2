import React, {useState} from 'react';
import './App.css';

import NavHeader from './component/navHeader';
import Books from './component/books';
import Category from './component/category';
import Topic from './component/topicComponent';



function App() {
  const [currentNavTab, setCurrentNavTab] = useState("BOOKS");

  function renderNavPage(currentNavTab) {
    console.log("debug here",currentNavTab);
    switch (currentNavTab) {
      case "BOOKS":
        return <Books currentNavTab={currentNavTab} />;
      case "CATEGORY":
        return <Category currentNavTab={currentNavTab} />;
      case "TOPIC":
        return <Topic currentNavTab={currentNavTab} />
    }
  }
  return (
    <div className="App">
      <NavHeader currentNavTab={currentNavTab} setNavTab={(clickedVal) => {setCurrentNavTab(clickedVal)}} />
      {renderNavPage(currentNavTab)}
    </div>
  );
}

export default App;
