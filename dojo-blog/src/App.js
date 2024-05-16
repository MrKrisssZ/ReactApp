
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to the new blog'
  const liked = 50
  
  
  return (
    // curly braket means the dynamic variable but we cant output booleans or objects
    // jsx style code
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
