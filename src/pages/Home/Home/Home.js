import React from 'react';
import Footer from '../../Shared/Footer';
import Introduction from '../Introduction';
import Projects from '../Projects';
import home from './Home.css';


const Home = () => {
    return (
        <div className="bg-info">
          <Introduction></Introduction>
         <Projects></Projects>
         
        </div>
    );
};

export default Home;