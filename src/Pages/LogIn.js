import '../Styles/Login.css'
import { AuthContext } from '../Context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const LogIn = () => {
 const {handleInputChange,credentials,handleUserLogin} = useContext(AuthContext)
  return (
    <div className='login'>
        <h1 className='login--header'>Friends Login</h1>
     <form onSubmit={e=>handleUserLogin(e,credentials)}>
       <input 
       type="email"
       value={credentials.email}
       onChange={handleInputChange}
       name='email'
       placeholder='Enter email'
       className='login--email'
        />

       <input 
       type="password"
       value={credentials.password1}
       onChange={handleInputChange}
       name='password1'
       placeholder='Enter password'
        className='login--password'
        />

       <button 
       type='submit'
       className='login--btn'
       >Submit</button>
     </form>

     <p
     className='login--signup'
     >Don't have an account <Link 
     to='/signup'
     >SignUp</Link></p>
    </div>
  )
}
export default LogIn