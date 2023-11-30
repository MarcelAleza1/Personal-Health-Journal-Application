import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import { Home } from './components/Home';
import { Navbar } from "./common/Navbar";
import { Signup } from "./components/SignUp";
import { Login } from "./components/Login";
import { ExerciseTracker } from "./components/ExerciceTraker";
import { BloodPressure } from "./components/BloodPressure";
import { Insights } from "./components/Insights";
import { Profile } from "./components/Profile";
import { Logout } from "./common/Logout";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tracker" element={<ExerciseTracker />} />
          <Route path="/bpressure" element={<BloodPressure />} />
          <Route path="/insights" element = {<Insights />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />}/>
          <Route path='*' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
