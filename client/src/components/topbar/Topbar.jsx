import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <img src="/assets/menu.png" alt="..." className="logoImg" />
        <Link to="/" replace={true} style={{textDecoration:"none"}}>

        <span className="logo">FakeBook</span>

        </Link>
    
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon"/>
          <input placeholder="Ara..." className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">

        <div className="topbarLinks">

          <div className="topbarLink">
            <HomeIcon />
            Anasayfa
          </div>
          
          <div className="topbarLink">
            <ViewTimelineIcon />
            Zaman Tüneli
          </div>

        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/person1.jpeg" alt="..." className="topbarImage" />
      </div>
    </div>
  );
}
