import '../Styles/Modal.css'
import { useContext } from 'react'
import { AuthContext } from '../Context'

const Modal = ({handleCloseModal}) => {
 const {post,handleChange,handleSubmit} = useContext(AuthContext)


  return (
 <div className='modalBackground'>
  <div className="modalContainer">
    <h1>Create a Post</h1>
    
    <textarea 
    name="post"
    id="post"
    cols="30" 
    rows="10"
    value={post}
    onChange={handleChange}
    placeholder='whats on your mind'
    ></textarea>
    
    <div className='modalContainer--btn'>
     <button onClick={handleSubmit}>
      Post
    </button>
    <button onClick={handleCloseModal}>
      Cancel
    </button>
    </div>
  </div>
 </div>
  )
}


export default Modal 


