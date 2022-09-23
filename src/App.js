import './App.css';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import Workspace from './components/dashboard/Workspace';
import AuthedRoute from './components/AuthedRoute';
import UnauthedRoute from './components/UnauthedRoute';
import Home from './components/Home';

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
          <Route path='/' element={<Home/>}/>

          {/* If not authenticated */}
          <Route element={<UnauthedRoute/>}>
            <Route path="/auth/signup" element={<Signup/>}/>
            <Route path="/auth/login" element={<Login/>}/>
          </Route>
          {/* If authenticated */}
          <Route element={<AuthedRoute />}>
            <Route path="/dashboard/workspace" element={<Workspace/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
