import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';
import Friends from './Pages/Friends';
import { AuthProvider } from './Context';
import PrivateRoutes from './components/PrivateRoutes';


const App = () => {
  return (
    <Router>
    <AuthProvider>
       
      <Routes>
      <Route element={<PrivateRoutes/>}>
       <Route element={ <Navbar />}/>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
      </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>

    </AuthProvider>
    </Router>
  );
};

export default App;
