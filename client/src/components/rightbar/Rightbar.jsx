import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../Online/Online";

export default function Rightbar({ profile }) {
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

  const ProfileRightbar = ()=>{
    return (
     <>
     <h4 className="rightbarTitle">Hakkında</h4>
     <div className="rightbarInfo">


      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Doğum yeri:</span>
        <span className="rightbarInfoValue">Samsun</span>
      </div>

      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Yaşadığı yer:</span>
        <span className="rightbarInfoValue">Samsun</span>
      </div>

      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">İlişki Durumu:</span>
        <span className="rightbarInfoValue">Yok</span>
      </div>

      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Ne iş yapıyor:</span>
        <span className="rightbarInfoValue">Web Developer</span>
      </div>





     </div>

     <h4 className="rightbarTitle">Arkadaşları</h4>
     <div className="rightbarFollowins">
      <div className="rigthbarFollowing">
        <img src="/assets/person/person1.jpeg" alt="..." className="rightbarFollowingImg" />
        <span className="rightbarFollowingUsername">Samuel North</span>
      </div>
      <div className="rigthbarFollowing">
        <img src="/assets/person/person2.jpeg" alt="..." className="rightbarFollowingImg" />
        <span className="rightbarFollowingUsername">Percy Jackson</span>
      </div>
      <div className="rigthbarFollowing">
        <img src="/assets/person/person3.jpeg" alt="..." className="rightbarFollowingImg" />
        <span className="rightbarFollowingUsername">John Snow</span>
      </div>
      <div className="rigthbarFollowing">
        <img src="/assets/person/person4.jpeg" alt="..." className="rightbarFollowingImg" />
        <span className="rightbarFollowingUsername">Anthony Clark</span>
      </div>
      <div className="rigthbarFollowing">
        <img src="/assets/person/person5.jpeg" alt="..." className="rightbarFollowingImg" />
        <span className="rightbarFollowingUsername">Jason Deluro</span>
      </div>
      <div className="rigthbarFollowing">
        <img src="/assets/person/person6.jpeg" alt="..." className="rightbarFollowingImg" />
        <span className="rightbarFollowingUsername">Sulthan Kaddafi</span>
      </div>
     </div>
     </>

    )
  }


  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      
      </div>
    </div>
  );
}
