import React from "react";
import Main from "../components/Main.js";
import request from "../Requests.js";
import Card from "../components/Card.js";

const Home = () => {
  return (
    <>
      
      <Main />
      <Card rowID='1' title='UpComing' fetchURL={request.requestUpcoming}/>
      <Card rowID='2' title='Trending' fetchURL={request.requestPopular}/>
      <Card rowID='3' title='Top-Rated' fetchURL={request.requestToprated}/>
      {/* <Card title='Latest' fetchURL={request.requestLatest}/> */}
    </>
  );
};

export default Home;
