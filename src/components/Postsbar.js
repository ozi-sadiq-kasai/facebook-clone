import '../Styles/Postsbar.css'
import { Plus} from 'react-feather'
import Avatar from '../components/Avatar'
import { postbarIcons, postNames,postColors } from '../data'


const Postsbar = () => {

  const postIcons = postbarIcons.map((icon,index)=>{
   return(
   <li key={index}>
    <p style={{color:postColors[index]}}className='postbar--icons-icons'>{icon}</p>
    <p className='postbar--icons-name'>{postNames[index]}</p> 
   </li>
   )
  })


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
       <button type='submit'>What's on your mind, Orz?</button>
       </div> 
        <hr/>
        <ul className='postbar--icons'>
         {postIcons}
        </ul>
      </div>
     </div>
    
  )
}
export default Postsbar