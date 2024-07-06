import './App.css';
import Home from './Home';
import {  BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Details from './details.jsx';


const App=() =>{
  return (
    
    <Router>
      <Routes>
      <Route path= '/' element={<Home/>} />
      <Route path='/coin' element={<Details/>}/>
      </Routes>
    </Router>
    
    
    
  )
}

export default App;
