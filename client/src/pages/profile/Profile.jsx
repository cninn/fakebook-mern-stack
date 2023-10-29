import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";



export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
            <img className="profileCoverImg" src="/assets/post/post16.jpeg" alt="..." />
            <img className="profileUserImg" src="/assets/person/person2.jpeg" alt="..." />
            </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Derya Uslu</h4>
                    <span className="profileInfoDesc">Hello myfriends!</span>
                </div>
 
       


          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
