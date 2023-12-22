import '../Styles/Postsbar.css'
import { useContext,useEffect } from "react"
import { AuthContext } from '../Context'
import { Plus} from 'react-feather'
import Avatar from '../components/Avatar'
import { postbarIcons, postNames,postColors } from '../data'
import Modal from './Modal'
import Posts from './Posts'



const Postsbar = () => {
 // const [openModal,setOpenModal] = useState(false)
 const {openModal,handleCloseModal,handleOpenModal,getUserOnLoad,user} = useContext(AuthContext)

  const postIcons = postbarIcons.map((icon,index)=>{
   return(
   <li key={index}>
    <p style={{color:postColors[index]}}className='postbar--icons-icons'>{icon} </p>
    <p className='postbar--icons-name'>{postNames[index]}</p> 
   </li>
   )
  })

  useEffect(()=>{
    getUserOnLoad()
  },[])


  return (
    <div className='postbar'>

     <div className="postbar--story">
      <Plus className='postbar--icon'/>
      <div className='postbar--createStory'>
      <h1 className='postbar--header'>Create a Story</h1>
      <p className='postbar--para'>Share a photo or write something</p>
      </div>
     </div>

     <div className="postbar--post">
       <div className="postbar--avatar">
        <Avatar/>
       <button 
       type='submit'
       onClick={handleOpenModal}
       >What's on your mind {user ? user.name : 'Anonymous'}?</button>
       </div> 
        <hr/>
        <ul className='postbar--icons'>
         {postIcons}
        </ul>
      </div>
        {openModal && (
        <Modal handleCloseModal={handleCloseModal} />
      )}
       {<Posts/>}
     </div>
    
  )
}
export default Postsbar