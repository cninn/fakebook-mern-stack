import './closeFriends.css'

const PF = process.env.REACT_APP_PUBLIC_FOLDER

export default function CloseFriends({user}) {
  return (
    <li className="sidebarFriend">
    <img src={PF+user.profilePicture} alt="..." className="sidebarFriendImg" />
    <span className="sidebarFriendName">
     {user.username}
    </span>
  </li>
  )
}
