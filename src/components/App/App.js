import React, { useState } from 'react';
import ReactTooltip from "react-tooltip";
import Map from '../Map';
import DataFetch from '../FetchData';
import './styles.css';

const App = () => {
  const [content, setContent] = useState("");
  const [data, setData] = useState({});

  return ( 
    <div className="main">
      <DataFetch content={content} setData={setData}/>
      <Map setTooltipContent={setContent}/>
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default App;
