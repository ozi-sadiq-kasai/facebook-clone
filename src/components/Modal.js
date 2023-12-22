import '../Styles/Modal.css'
import { useContext } from 'react'
import { AuthContext } from '../Context'
import { X } from 'react-feather'

const Modal = () => {
 const {post,handlePostChange,handleSubmit,handleCloseModal} = useContext(AuthContext)


  return (
 <div className='modalBackground'>
  <div className="modalContainer">
  <div className="modalContainer--header">
     <h1>Create a Post</h1>
     <X onClick={handleCloseModal}/>
  </div>
    
  <form onClick={handleSubmit}>
     <textarea 
    name="post"
    id="post"
    maxLength='1000'
    value={post}
    onChange={handlePostChange}
    placeholder='whats on your mind'
    ></textarea>
    <button className="modalContainer--btn" onClick={handleCloseModal}>
      Post
    </button>
  </form>  
    
  </div>
 </div>
  )
}


export default Modal 


