import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${PF}post/post15.jpeg`}
                alt="..."
              />
              <img
                className="profileUserImg"
                src="/assets/person/person2.jpeg"
                alt="..."
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Derya Uslu</h4>
              <span className="profileInfoDesc">Hello myfriends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="caninan"/>
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
