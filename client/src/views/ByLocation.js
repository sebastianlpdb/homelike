import React from 'react';

const Home = props => {
  const params = new URLSearchParams(window.location.search);

  return (
    <div className="container">
      {params.get('location')}
    </div>
  );
}

export default Home;
