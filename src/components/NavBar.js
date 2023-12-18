import facebook from '../images/facebook.svg'
import { NavLink} from 'react-router-dom'
import { Bell, Menu, Search,Home,Users,Video,ShoppingCart,MessageSquare } from 'react-feather'
import Avatar from './Avatar'
import '../Styles/Nav.css'


const Nav = () => {
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
   to="/home"
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
     <Menu/>
     <MessageSquare/>
     <Bell/>
     <Avatar/>
    </div>
</nav>
  )
}
export default Nav