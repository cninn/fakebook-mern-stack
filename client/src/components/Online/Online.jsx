
import './online.css'

const PF = process.env.REACT_APP_PUBLIC_FOLDER

export default function Online({user}) {
  return (
    <li className="rightbarFriend">
    <div className="rightbarProfileImgContainer">
      <img className='rightbarPorıfileImg' src={PF+user.profilePicture} alt="..." />
      <span className="onlineBadge"></span>
    </div>
    <div className="userBox">
    <span className="rightbarUsername">{user.username}</span>
      <img className='messenger' src="/assets/messenger.webp" alt="..." />
    </div>
   
  </li>
  )
}
