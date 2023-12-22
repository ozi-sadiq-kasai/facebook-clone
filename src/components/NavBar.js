import facebook from '../images/facebook.svg'
import { NavLink} from 'react-router-dom'
import { Bell,Search,Home,Users,Video,ShoppingCart,MessageSquare,LogOut } from 'react-feather'
import Avatar from './Avatar'
import { useContext } from 'react'
import { AuthContext } from '../Context'
import '../Styles/Nav.css'


const Nav = () => {
 const {handleUserLogout} = useContext(AuthContext)

  return (
<nav className='header'>

    <div className="header--logo">
     <img src={facebook} alt="facebook logo" />
      <div className="header--input">
       <Search className='header--search'/>
     <input 
     type="text"
     placeholder='Search Facebook'
      />
      </div>
      
    </div>

    <div className="header--icons">

  <NavLink
   to="/"
   style={({ isActive }) => ({
   color: isActive
   ? "blue" : "gray",
   borderBottom:isActive 
   ? "2px solid blue" : "none"
   })}>
   <Home/>
  </NavLink>

  <NavLink
   to="/friends"
   style={({ isActive }) => ({
   color: isActive
   ? "blue" : "gray",
   borderBottom:isActive 
   ? "2px solid blue" : "none"
   })}> 
   <Users />
   </NavLink>

       <Video/>
       <ShoppingCart/>
    </div>

    <div className="header--profile">
     <MessageSquare/>
     <Bell/>
     <Avatar/>
     <LogOut onClick={handleUserLogout}/>
    </div>
</nav>
  )
}
export default Nav

 