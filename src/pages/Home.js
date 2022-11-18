import React from "react";
import Main from "../components/Main.js";
import request from "../Requests.js";
import Card from "../components/Card.js";

const Home = () => {
  return (
    <>
      
      <Main />
      <Card title='UpComing' fetchURL={request.requestUpcoming}/>
      <Card title='Trending' fetchURL={request.requestPopular}/>
      <Card title='Top-Rated' fetchURL={request.requestToprated}/>
      {/* <Card title='Latest' fetchURL={request.requestLatest}/> */}
    </>
  );
};

export default Home;
