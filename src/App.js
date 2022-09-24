import './App.css';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import Workspace from './components/dashboard/Workspace';
import Inbox from './components/dashboard/Inbox';
import Notifications from './components/dashboard/Notifications';
import Profile from './components/dashboard/Profile';
import Projects from './components/dashboard/Projects';
import Settings from './components/dashboard/Settings';
import Tasks from './components/dashboard/Tasks';
import AuthedRoute from './components/AuthedRoute';
import UnauthedRoute from './components/UnauthedRoute';
import Home from './components/Home';
import Sidebar from './components/dashboard/Sidebar';
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
                  <Route path="/dashboard/inbox" element={<Inbox/>}/>
                  <Route path="/dashboard/notifications" element={<Notifications/>}/>
                  <Route path="/dashboard/profile" element={<Profile/>}/>
                  <Route path="/dashboard/projects" element={<Projects/>}/>
                  <Route path="/dashboard/settings" element={<Settings/>}/>
                  <Route path="/dashboard/tasks" element={<Tasks/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
