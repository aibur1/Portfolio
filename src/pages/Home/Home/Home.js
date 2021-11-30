import React from 'react';
import Introduction from '../Introduction';
import Projects from '../Projects';


const Home = () => {
    return (
        <div className="bg-info">
          <Introduction></Introduction>
         <Projects></Projects>
        </div>
    );
};

export default Home;