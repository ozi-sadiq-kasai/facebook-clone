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
   <div>
     {user ? <h2>{user.name}</h2> : <p>Anonymous</p>}
      <ul className='sidebar'>
    {sidebarItems}
     </ul>
   </div>
  )
}
export default Sidebar


