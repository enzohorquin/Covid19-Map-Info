import React, { useState } from 'react';
import ReactTooltip from "react-tooltip";
import Map from '../Map';
import DataFetch from '../FetchData';
import BoxContainer from '../Box';
import ScreenCards from '../ScreenCards';
import './styles.css';

const App = () => {
  const [content, setContent] = useState("");
  const [data, setData] = useState({deaths: 0, recovered: 0, confirmed: 0});

  return ( 
    <div className="main">
      <div className="container-box">
        <BoxContainer data={data}/>
      </div>
      <DataFetch content={content} setData={setData}/>
      <Map setTooltipContent={setContent}/>
      <ReactTooltip>{content}</ReactTooltip>
      <ScreenCards />

    </div>
  );
}

export default App;
