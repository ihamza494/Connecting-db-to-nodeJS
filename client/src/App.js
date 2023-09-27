import './App.css';
import Home from './pages/Home';
import AddEmployee from './pages/AddEmployee';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
function App() {
  
  return (
    <div className='App'>
      <Router>
        <Link to="/addemployee">Add new Employee</Link>
        <Link to="/">Home Page</Link>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/addemployee' exact Component={AddEmployee}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
