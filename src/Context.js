import {useEffect,createContext,useState} from "react"
import client,{databases,DATABASE_ID,COLLECTION_ID_MESSAGES} from './appwriteConfig'
import { Query,ID } from "appwrite"

const AuthContext = createContext()



const AuthProvider = ({children}) => {
 const [loading,setLoading] = useState(true)
 const [posts,setPosts] = useState([])
 const [post,setPost] = useState('')


// Create Post
  const handleChange = (e)=>{
  setPost(e.target.value)
  }

  const handleSubmit = async(e)=>{
   e.preventDefault()
   let payload ={
   body:post
   }
   
   let response = await databases.createDocument(
    DATABASE_ID,
    COLLECTION_ID_MESSAGES,
    ID.unique(),
    payload
   )
   console.log(post) 
   setPost('')
  }


 // get Posts from the database
const getPosts = async()=>{
 const response = await databases.listDocuments(DATABASE_ID,COLLECTION_ID_MESSAGES,
   [
  Query.orderDesc('$createdAt')
 ]
  )
 setPosts(response.documents)
}

 useEffect(()=>{
  getPosts()
  // Subscribe to files channel
  const unsubscribe = client.subscribe(`databases.${DATABASE_ID}.collections.${COLLECTION_ID_MESSAGES}.documents`,
  response=>{
   if(response.events.includes("databases.*.collections.*.documents.*.create")){
     console.log('NEW MESSAGE CREATED:')
     setPosts(prevState => [response.payload,...prevState])
   }
  })

  return () => {
   unsubscribe()
   setLoading(false)
  }
 
 },[])


  const contextData={
   posts,
   handleChange,
   handleSubmit
  }
  return (
 
    
   
    <AuthContext.Provider value={contextData}>
      {loading ? <h1>loading...</h1> : children}
    </AuthContext.Provider>
  )
}
export{AuthProvider,AuthContext}