import { useContext } from "react"
import { AuthContext } from "../Context"
import Avatar from './Avatar'

const Posts = () => {
 const{posts} = useContext(AuthContext)





 const showPosts = posts.map((post)=>{

const timestamp =post.$createdAt
const dateObj = new Date(timestamp);

// Get day, month, and time using toLocaleDateString and toLocaleTimeString
const options = { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };
const formattedDate = dateObj.toLocaleDateString(undefined, options);

// console.log(`Formatted Date: ${formattedDate}`);





 return(
 <div className="post">
  <div className="post--header">
<Avatar/>
   ozi
   <p>{formattedDate}</p>
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