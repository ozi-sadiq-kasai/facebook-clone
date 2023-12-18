import profile from '../images/icon.jpg'


const Avatar = () => {
  return (
    <div>
     <img 
     src={profile} 
     alt="avatar"
     style={{width:'30px',height:"30px",borderRadius:'50%'}}
     />
    </div>
  )
}
export default Avatar