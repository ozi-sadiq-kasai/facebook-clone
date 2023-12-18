import '../Styles/Suggestions.css'
import remote from '../images/remote.jpg'
import travel from '../images/travel.jpg'

const Suggestions = () => {
  return (
    <div className='suggest'>

     <div className='suggest--input'>
      <img 
      src={remote}
      alt="image of a remote worker" className='suggest--image' />
      <p>Evolution of Work?</p>
     </div>

     <div className='suggest--input'>
      <img 
      src={travel}
      alt="image of a remote worker" className='suggest--image' />
      <p>2024 Travels</p>
     </div>
    </div>
  )
}
export default Suggestions