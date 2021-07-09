import './App.css';
import loading from './components/Home/loading';
import MovieDetails from './components/Home/MovieDetails';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Favorites from './components/Home/Favorites';
import Navbar from './components/layout/Navbar';


function App() {
  return (
    <div className="App">
  
   
   
    <BrowserRouter>
  
    <Navbar />
    <div className="container">
      <Switch> 
        <Route exact path="/" component={loading} />
        <Route exact path="/movie/:id" component={MovieDetails} />
        <Route exact path="/favorites" component={Favorites} />


      </Switch>
     
      </div>
    </BrowserRouter>

  
    <br />
    
    </div>
  );
}

export default App;
