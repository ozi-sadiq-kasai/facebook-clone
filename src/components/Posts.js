import { useContext } from "react"
import { AuthContext } from "../Context"
import { ThumbsUp,MessageCircle,Share2, Gift, Smile, Star } from "react-feather"
import { X } from "react-feather"
import Avatar from './Avatar'
import '../Styles/Posts.css'


const Posts = () => {
 const{posts,handleDeletePost,user} = useContext(AuthContext)


 const showPosts = posts.map((post)=>{

  const timestamp =post.$createdAt
  const dateObj = new Date(timestamp);

// Get day, month, and time using toLocaleDateString and toLocaleTimeString
  const options = { day: 'numeric', month: 'short', year: '2-digit', hour: 'numeric', minute: 'numeric' };
  const formattedDate = dateObj.toLocaleDateString(undefined, options);


 return(
 <div className="post">
   
  <div className="post--header">
   <Avatar/>  
   <div className="post--info"> 
     <p> {user ? user.name : 'Anonymous'}</p>
    <p>{formattedDate}</p>
   </div>
   <X onClick={()=>handleDeletePost(post.$id)}/>
  </div>
  <div className="post--body">
   <p>{post.body}</p>
  </div>
   <ul className="post--icons">
    <li>
     <span><ThumbsUp/></span>
     <span>Like</span>
    </li>
    <li>
     <span><MessageCircle/></span>
     <span>Comment</span>
    </li>
    <li>
     <span><Share2/></span>
     <span>Share</span>
    </li>
   </ul>
  <div className="post--comment">
   <Avatar/>
 
    <div className="post--comment-icons">
        <p>Write a comment</p>
     <div className="post--comment-icon">
      <Gift/>
     <Smile/>
     <Star/>
     </div>
    </div>
 
   
  </div>
 </div>
 )
 })

  return (
    <div>{showPosts}</div>
  )
}
export default Posts