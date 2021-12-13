import logo from './logo.svg';
import './App.css';
import Contact from './Contact';
import Contact2 from './Contact2';

import {BrowserRouter as Router,Route,Routes,Link,Switch} from 'react-router-dom';

function App() {
  return (
    <>
   
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/Contact">Contact</Link>
            </li>
          <li>
            <Link to="/Contact2">Contact2</Link>
            </li>
        </ul>
        
      </div>
      <Routes>
          <Route path="/Contact" component={Contact}></Route>
          <Route path="/Contact2" component={Contact2}></Route>
      </Routes>
    </Router>)
    </>
  );
}

export default App;
