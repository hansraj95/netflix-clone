import React from 'react'
import request  from './request';
import CreateRow from './poster'
import Banner from './banner'
import Nav from './nav'

function App() {
  return (
    <>   <Nav/>
    
        <Banner request={request.netflix}/>
      <CreateRow
      largeRow request={request.netflix} title="NETFLIX ORIGINALS"/>
      <CreateRow request={request.Trending} title="Trendig Now"/>
      <CreateRow request={request.Science_fiction} title="Science Fiction Movies"/>
      <CreateRow request={request.Action} title="Action Movies"/>
      <CreateRow request={request.Comedy} title="Comedy Movies"/>
      <CreateRow request={request.War} title="War Movies"/>
      <CreateRow request={request.Crime} title="Crime Movies"/>
      <CreateRow request={request.Thriller} title="Thriller Movies"/>
      <CreateRow request={request.Horror} title="Horror Movies"/>
      <CreateRow request={request.Family} title="Family Movies"/>
      <CreateRow request={request.Mystery} title="Mystery Movies"/>

    
    </>
  );
}

export default App;
