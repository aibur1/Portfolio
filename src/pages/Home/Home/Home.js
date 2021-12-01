import React from 'react';
import Footer from '../../Shared/Footer';
import Introduction from '../Introduction';
import Projects from '../Projects';


const Home = () => {
    return (
        <div className="bg-info">
          <Introduction></Introduction>
         <Projects></Projects>
         <Footer></Footer>
        </div>
    );
};

export default Home;