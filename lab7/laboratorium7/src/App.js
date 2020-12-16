import './App.css';
import Header from './Header';
import Home from './Home';
import Form from './Form';
import Gallery from './Gallery';
import Bootstrap from './Bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      
      <Router>
      <Header />
        <Switch> 
            <Route path="/Form">
              <Form />
            </Route>
            <Route path="/Gallery">
              <Gallery />
            </Route>
            <Route path="/Bootstrap">
              <Bootstrap />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
