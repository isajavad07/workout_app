import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Register';
import Plans from './components/Plans';
import Room from './components/room';
import Office from './components/Office';
import Beach from './components/Beach';
import Admin from './components/Admin';
import Workouts from './components/Workouts';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/plans' element={<Plans />}></Route>
        <Route path="/room" element={<Room />}></Route>
        <Route path="/office" element={<Office />}></Route>
        <Route path="/beach" element={<Beach />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/view' element={<Workouts />}></Route>
      </Routes>
    </Router>
  )
}

export default App
