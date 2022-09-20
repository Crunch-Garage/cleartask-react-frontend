import './App.css';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import Workspace from './components/dashboard/Workspace';
import AuthedRoute from './components/AuthedRoute';
import UnauthedRoute from './components/UnauthedRoute';

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
              {/* no authentication required to access */}
              <Route path="/" element={<App />} exact/>
              {/* Only accessible if not authenticated */}
              <Route path="/auth" element={<UnauthedRoute/>} exact>
                <Route path="/auth/signup" element={<Signup/>}/>
                <Route path="/auth/login" element={<Login/>}/>
              </Route>
              {/* Requires user to be authenticated */}
              <Route path="/dashboard" element={<AuthedRoute />} exact>
                <Route path="/dashboard/workspace" element={<Workspace/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
