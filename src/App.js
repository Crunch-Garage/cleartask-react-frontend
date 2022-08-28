import './App.css';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} exact/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
