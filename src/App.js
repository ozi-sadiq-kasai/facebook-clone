import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './Pages/Home';
import Friends from './Pages/Friends';
import { AuthProvider } from './Context';

const App = () => {
  return (
    <Router>
    <AuthProvider>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
     
      </Routes>
    </AuthProvider>
    </Router>
  );
};

export default App;
