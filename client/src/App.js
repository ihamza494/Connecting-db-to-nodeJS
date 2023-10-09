import './App.css';
import Home from './pages/Home';
import AddEmployee from './pages/AddEmployee';
import Employee from './pages/Employee';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
function App() {
  
  return (
    <div className='App'>
      <Router>
        <div className='header'>
        <Link to="/addemployee">Add new Employee</Link>
        <Link to="/">Home Page</Link>
        </div>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/addemployee' exact Component={AddEmployee}/>
          <Route path='/Employee/:id' exact Component={Employee}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
