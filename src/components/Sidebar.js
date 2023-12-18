import '../Styles/Sidebar.css'
import { sidebarIcons,sidebarnames,iconColors } from '../data'



const Sidebar = () => {

const sidebarItems = sidebarnames.map((name,index)=>(
<li key={index} >
 <p className="sidebar--icon" style={{color:iconColors[index]}}>{sidebarIcons[index]}</p>
 <p className='sidebar--name'>{name}</p>
</li>
))

  return (
     <ul className='sidebar'>
    {sidebarItems}
     </ul>
  )
}
export default Sidebar


