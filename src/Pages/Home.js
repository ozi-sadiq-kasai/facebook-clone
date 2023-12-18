import '../Styles/Home.css'
import Sidebar from '../components/Sidebar'
import Postsbar from '../components/Postsbar'
import Suggestions from '../components/Suggestions'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <Postsbar/>
      <Suggestions/> 
    </div>
  )
}
export default Home