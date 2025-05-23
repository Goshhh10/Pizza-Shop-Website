import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <h1>Pizza Taste</h1>
        <h2>The tasty pizza of <br /> your choice</h2>
        <a href="#menu" className="btn">View Menu</a>
      </div>
      <div className="home-img">
        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" alt="Delicious pizza" />
      </div>
    </section>
  );
};

export default Home;