
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Career from './Pages/Career';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Membership from './Pages/Membership';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/login" element={<Login />} />
        <Route path="/membership" element={<Membership/>} />
      </Routes>
    </Router>
  )
}

export default App