
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  
  return (
    // curly braket means the dynamic variable but we cant output booleans or objects
    // jsx style code

    // the Switch component makes sure that only one route component shows in the browser at any one time. So when a request is made to a route, react will look that request and then go from top to bottom
    // inside the switch and try to match against a route

    // * means catch-all routes, it has to be at the bottom of the routes
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/create">
              <Create></Create>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails></BlogDetails>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
    
        </div>
      </div>
    </Router>
  );
}

export default App;
