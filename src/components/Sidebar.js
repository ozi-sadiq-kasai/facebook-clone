import '../Styles/Sidebar.css'
import { sidebarIcons,sidebarnames,iconColors } from '../data'
import { AuthContext } from '../Context'
import { useContext } from 'react'


const Sidebar = () => {
 const {user} = useContext(AuthContext)

const sidebarItems = sidebarnames.map((name,index)=>(
<li key={index} className="sidebar--list" >
 <p className="sidebar--icon" style={{color:iconColors[index]}}>{sidebarIcons[index]}</p>
 <p className='sidebar--name'>{name}</p>
</li>
))

  return (
   <div className='sidebar'>
 <ul>
     {user ? <div className='sidebar--username'>
      <span>Welcome</span> 
      <h1>{user.name}</h1>
     </div> : <h1 className='sidebar--Anon'>Anonymous</h1>}
    {sidebarItems}
     </ul>
   </div>
  )
}
export default Sidebar


