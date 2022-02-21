import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import About from './pages/Home/About';
import Blogs from './pages/Home/Home/Blogs';
import Contact from './pages/Home/Home/Contact';
import Resume from './pages/Home/Home/Resume';
import Navigation from './pages/Shared/Navigation';
import {
  BrowserRouter,
  Switch,
  Routes,
  Route
} from "react-router-dom";
import Footer from './pages/Shared/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation></Navigation>
      
        <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
          <Route path="/about">
            <About ></About>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/contact">
            <Contact ></Contact>
          </Route>
          {/* <Route path="/resume">
            <Resume ></Resume>
          </Route> */}
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
