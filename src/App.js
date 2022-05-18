import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Navbar from './components/pages/Sheard/Navbar/Navbar';
import Login from './components/pages/Login/Login';
import Appointment from './components/pages/Appointment/Appointment';
import SignUp from './components/pages/SignUp/SignUp';
import RequireAuth from './components/pages/Sheard/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/pages/Dashboard/Dashboard';
import MyDashboard from './components/pages/Dashboard/MyDashboard';
import MyReview from './components/pages/Dashboard/MyReview';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>} />

        <Route path="/dashboard" element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyDashboard />}/>
          <Route path="myReview" element={<MyReview />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
