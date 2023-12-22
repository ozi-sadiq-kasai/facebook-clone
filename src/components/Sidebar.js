import '../Styles/Sidebar.css'
import { sidebarIcons,sidebarnames,iconColors } from '../data'
import { AuthContext } from '../Context'
import { useContext } from 'react'


const Sidebar = () => {
 const {user} = useContext(AuthContext)

const sidebarItems = sidebarnames.map((name,index)=>(
<li key={index} >
 <p className="sidebar--icon" style={{color:iconColors[index]}}>{sidebarIcons[index]}</p>
 <p className='sidebar--name'>{name}</p>
</li>
))

  return (
   <div className='sidebar'>
 
     {user ? <div className='sidebar--username'>
      <span>Welcome</span> 
      <h1>{user.name}</h1>
     </div> : <p>Anonymous</p>}
      <ul className='sidebar--ul'>
    {sidebarItems}
     </ul>
   </div>
  )
}
export default Sidebar


