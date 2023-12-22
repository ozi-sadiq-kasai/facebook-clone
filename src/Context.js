import {useEffect,createContext,useState} from "react"
import client,{databases,DATABASE_ID,account,COLLECTION_ID_MESSAGES} from './appwriteConfig'
import { useNavigate } from "react-router-dom"
import { Query,ID } from "appwrite"

const AuthContext = createContext()



const AuthProvider = ({children}) => {
 const [user,setUser] = useState(null)
 const [loading,setLoading] = useState(true)
 const [posts,setPosts] = useState([])
 const [post,setPost] = useState('')
 const navigate = useNavigate()
 const [openModal,setOpenModal] = useState(false)
 const [credentials,setCredentials] = useState(
  {
   name:'',
   email:'',
   password1:'',
   password2:'',
  }
 )


//handle inputChange
const handleInputChange = (e)=>{
 e.preventDefault()
 let name = e.target.name
 let value = e.target.value
 setCredentials({...credentials,[name]:value})
 // console.log(credentials)
}

// handle userSignup
const handleSignupLogin =async(e,credentials)=>{
 e.preventDefault()
 if(credentials.password1 !== credentials.password2){
  alert('Passwords do not match')
 }
 try {

  let response = await account.create(
    ID.unique(),
    credentials.email,
    credentials.password1,
    credentials.name)

  // console.log(response)

  await account.createEmailSession(credentials.email,credentials.password1)

  const accountDetails = await account.get()
  // console.log('accounDetails:',accountDetails)
  // console.log('accounDetails:',accountDetails.name)
  setUser(accountDetails)
  navigate('/')

  setCredentials({
      name: '',
      email: '',
      password1: '',
      password2: '',
    });
 } 
 
 catch (error) {
  console.error(error)
 }
}


//handle Userlogin
const handleUserLogin = async (e)=>{
e.preventDefault()
 try {
  let response = await account.createEmailSession(credentials.email,credentials.password1)
  // console.log('logged',response)
   const accountDetails = account.get()
   setUser(accountDetails)
   navigate('/')
   
 } catch (error) {
  console.error(error)
 }
}

// Create Modal State
 const handleCloseModal = ()=>{
  setOpenModal(false)
 }
 const handleOpenModal = ()=>{
  setOpenModal(true)
 }



 // Get UseronLoad
const getUserOnLoad = async ()=>{
 try {
   const accountDetails = await account.get()
   setUser(accountDetails)
 } catch (error) {
  console.log(error)
 }
 setLoading(false)
}


// Hanlde PostInput Change
  const handlePostChange = (e)=>{
  setPost(e.target.value)
  }

// Create Post submission
const handleSubmit = async (e) => {
  e.preventDefault();
  if (post.trim() !== '') { // Check if user is not null
    let payload = {
      body: post,
    };
    console.log(payload.body)
    setPost('');

    try {
      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID_MESSAGES,
        ID.unique(),
        payload,
      );
      console.log(payload)
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }
};

 // get Posts from the database
const getPosts = async()=>{
 const response = await databases.listDocuments(DATABASE_ID,COLLECTION_ID_MESSAGES,
   [
  Query.orderDesc('$createdAt')
 ]
  )
 setPosts(response.documents)
}

// delete post from database and window
const handleDeletePost = async( postID)=>{
 const deletepost =databases.deleteDocument(
  DATABASE_ID,
  COLLECTION_ID_MESSAGES,
  postID
 )
 console.log('post deleted',deletepost)
}

// User LogOut
const handleUserLogout = ()=>{
 account.deleteSession('current')
 setUser(null)
 console.log('logged out')
 navigate('/login')
}


// useEffect
 useEffect(()=>{
  getPosts()
  getUserOnLoad()
  // Subscribe to files channel
  const unsubscribe = client.subscribe(`databases.${DATABASE_ID}.collections.${COLLECTION_ID_MESSAGES}.documents`,

  response=>{
   if(response.events.includes("databases.*.collections.*.documents.*.create")){
     console.log('NEW MESSAGE CREATED:')
     setPosts(prevState => [response.payload,...prevState])
   }

      if(response.events.includes("databases.*.collections.*.documents.*.delete")){
                console.log('A MESSAGE WAS DELETED!!!')
                // setPosts(prevState => prevState.filter(message => post.$id !== response.payload.$id))
                     setPosts((prevState) => prevState.filter((post) => post.$id !== response.payload.$id));
            }
  })

  return () => {
   unsubscribe()
   setLoading(false)
  }
 
 },[])


  const contextData={
   post,
   user,
   posts,
   handleSubmit,
   handleCloseModal,
   handleOpenModal,
   openModal,
   handleInputChange,
   credentials,
   handleUserLogin ,
   handleSignupLogin, 
   handleDeletePost,
   handlePostChange,
   handleUserLogout,
   getUserOnLoad
  }
  return (
 
    
   
    <AuthContext.Provider value={contextData}>
      {loading ? <h1>loading...</h1> : children}
    </AuthContext.Provider>
  )
}
export{AuthProvider,AuthContext}