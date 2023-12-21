import '../Styles/SignUp.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../Context'


const SignUp = () => {
 const{handleInputChange,credentials,handleSignupLogin}= useContext(AuthContext)
  return (
    <div className='signup'>

     <form onSubmit={(e)=>handleSignupLogin(e,credentials)}>

      <input
       type="text"
       name='name'
       onChange={handleInputChange}
       value={credentials.name}
       placeholder='Enter name'
       />

       <input
       type="email"
       name='email'
       onChange={handleInputChange}
       value={credentials.email}
       placeholder='Enter Email'
       />

       <input
       type="password"
       name='password1'
       onChange={handleInputChange}
       value={credentials.password1}
       placeholder='Enter Password'
       />
            <input
       type="password"
       name='password2'
       onChange={handleInputChange}
       value={credentials.password2}
       placeholder='Confirm Password'
       />
  
     <button type='submit'>Submit</button>
     </form>
     <p>Already have an account <Link to='/login'>Login</Link></p>
    </div>
  )
}
export default SignUp