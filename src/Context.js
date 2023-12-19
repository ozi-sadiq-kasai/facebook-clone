import {useEffect,createContext,useState} from "react"
import {databases,DATABASE_ID,COLLECTION_ID_MESSAGES} from './appwriteConfig'

const AuthContext = createContext()



const AuthProvider = ({children}) => {
 const [loading,setLoading] = useState(true)
 const [posts,setPosts] = useState([])


 useEffect(()=>{
  getPosts()
  setLoading(false)
 },[])

 // get Posts from the database
const getPosts = async()=>{
 const response = await databases.listDocuments(DATABASE_ID,COLLECTION_ID_MESSAGES)
 setPosts(response.documents)
}
console.log(posts)
  const contextData={
   posts
  }
  return (
 
    
   
    <AuthContext.Provider value={contextData}>
      {loading ? <h1>loading...</h1> : children}
    </AuthContext.Provider>
  )
}
export{AuthProvider,AuthContext}