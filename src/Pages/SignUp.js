import '../Styles/SignUp.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../Context'


const SignUp = () => {
 const{handleInputChange,credentials,handleSignupLogin}= useContext(AuthContext)
  return (
    <div className='signup'>
     
     <h1 className='signup--header'>Friends Signup</h1>
     
     <form onSubmit={(e)=>handleSignupLogin(e,credentials)}>

      <input
       type="text"
       name='name'
       onChange={handleInputChange}
       value={credentials.name}
       placeholder='Enter name'
       className='signup--name'
       />

       <input
       type="email"
       name='email'
       onChange={handleInputChange}
       value={credentials.email}
       placeholder='Enter Email'
       className='signup--email'
       />

       <input
       type="password"
       name='password1'
       onChange={handleInputChange}
       value={credentials.password1}
       placeholder='Enter Password'
       className='signup--password1'
       />
            <input
       type="password"
       name='password2'
       onChange={handleInputChange}
       value={credentials.password2}
       placeholder='Confirm Password'
       className='signup--password2'
       />
  
     <button 
     type='submit'
     className='signup--btn'
     >Submit</button>
     </form>
     <p className='signup--signup'>Already have an account <Link to='/login'>Login</Link></p>
    </div>
  )
}
export default SignUp