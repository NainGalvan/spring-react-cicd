import './App.css';
import Navbar from "./components/Navbar/Navbar"
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Recipes from './components/pages/Recipes';
import Ingredients from './components/pages/Ingredients';

function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Recipes' element={<Recipes/>}/>
      <Route path='/Ingredients' element={<Ingredients/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
    </Routes>
      </Router>
  );
}

export default App;
