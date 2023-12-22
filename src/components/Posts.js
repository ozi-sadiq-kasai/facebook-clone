import { useContext } from "react"
import { AuthContext } from "../Context"
import Avatar from './Avatar'
import '../Styles/Posts.css'


const Posts = () => {
 const{posts,handleDeletePost,user} = useContext(AuthContext)


 const showPosts = posts.map((post)=>{

  const timestamp =post.$createdAt
  const dateObj = new Date(timestamp);

// Get day, month, and time using toLocaleDateString and toLocaleTimeString
  const options = { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };
  const formattedDate = dateObj.toLocaleDateString(undefined, options);


 return(
 <div className="post">
  <div className="post--header">
   <Avatar/>
     {user ? user.name : 'Anonymous'}
   <p>{formattedDate}</p>
   <p onClick={()=>handleDeletePost(post.$id)}>delete_post</p>
  </div>
  <div className="post--body">
   <p>{post.body}</p>
  </div>
  <div className="post--icons">
   <ul>
<li>
 <span>1</span>
 <span>a</span>
</li>
<li>
 <span>2</span>
 <span>a</span>
</li>
<li>
 <span>3</span>
 <span>a</span>
</li>
   </ul>
  </div>
  <div className="post--comment"></div>
 </div>
 )
 })

  return (
    <div>{showPosts}</div>
  )
}
export default Posts