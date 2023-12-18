import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './Pages/Home';
import Friends from './Pages/Friends';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
     
      </Routes>
    </Router>
  );
};

export default App;
