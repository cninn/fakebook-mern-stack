import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../Online/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {AuthContext} from '../../context/AuthContext'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const {user:currentUser,dispatch} = useContext(AuthContext)

  const [followed,setFollowed] = useState(currentUser.followings.includes(user?.id));

useEffect(()=>{
  setFollowed(currentUser.followings.includes(user?.id))
},[currentUser,user])


  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [user]);


  const handleClick = async()=>{
    try {
      if(followed){
        await axios.put('/users/'+user._id+"/unfollow",{userId:currentUser._id})
        dispatch({type:"UNFOLLOW",payload:user._id})
      }else{
        await axios.put('/users/'+user._id+"/follow",{userId:currentUser._id})
        dispatch({type:"FOLLOW",payload:user._id})
      }
      
    } catch (error) {
      console.log(error)
    }
    setFollowed(!followed)
  }

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="..." />

          <span className="birthdayText">
            {" "}
            <b> Bugün Ahmet Kumul </b> ve <b> 4 kişinin </b> daha doğum günü
          </span>
        </div>
        <img className="rightbarAd" src="/assets/party.jpeg" alt="..." />
        <h4 className="rightbarTitle">Çevrimiçi Olan Kişiler</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
    {user.username !== currentUser.username && (
      <button className="rightbarFollowButton" onClick={handleClick}>
        {followed ? "Arkadaşlarımdan Çıkar" : "Arkadaş ekle"}
        {followed ? < RemoveIcon/> : <AddIcon/>}
      
      </button>
    )}

        <h4 className="rightbarTitle">Hakkında</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Doğum yeri:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Yaşadığı yer:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">İlişki Durumu:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "İlişkisi yok"
                : user.relationship === 2
                ? "İlişkisi var"
                : "Belirtilmedi"}
            </span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Ne iş yapıyor:</span>
            <span className="rightbarInfoValue">Web Developer</span>
          </div>
        </div>

        <h4 className="rightbarTitle">Arkadaşları</h4>
        <div className="rightbarFollowings">
          {friends ? (
            friends.map((friend) => (
              <Link
                to={"/profile/" + friend.username}
                replace={true}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div className="rigthbarFollowing" key={friend.id}>
                  <img
                    src={
                      friend.profilePicture
                        ? friend.profilePicture
                        : PF + "noprofile.png"
                    }
                    alt={friend.username}
                    className="rightbarFollowingImg"
                  />
                  <span className="rightbarFollowingName">
                    {friend.username}
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <p>Henüz Takipçin Yok</p>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
