import './sidebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';

import CloseFriends from '../closeFriends/CloseFriends';

import{ Users } from '../../dummyData'



export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <RssFeedIcon className='sidebarIcon'/>
          <span className="sidebarListItemText">
            Akış
          </span>
          </li>
          <li className="sidebarListItem">
          <ChatIcon className='sidebarIcon'/>
          <span className="sidebarListItemText">
            Sohbet
          </span>
          </li>
          <li className="sidebarListItem">
          <PlayCircleIcon className='sidebarIcon'/>
          <span className="sidebarListItemText">
            Videolar
          </span>
          </li>
          <li className="sidebarListItem">
          <GroupsIcon className='sidebarIcon'/>
          <span className="sidebarListItemText">
            Gruplar
          </span>
          </li>
          <li className="sidebarListItem">
          <BookmarksIcon className='sidebarIcon'/>
          <span className="sidebarListItemText">
            Etiketler
          </span>
          </li>
          <li className="sidebarListItem">
          <HelpIcon className='sidebarIcon'/>
          <span className="sidebarListItemText">
            S.S.S
          </span>
          </li>
          <li className="sidebarListItem">
          <WorkIcon className='sidebarIcon'/>
          <span className="sidebarListItemText">
            İş dünyası
          </span>
          </li>
          <li className="sidebarListItem">
          <CalendarMonthIcon className='sidebarIcon'/>
          <span className="sidebarListItemText">
            Etkinlikler
          </span>
          </li>
          <li className="sidebarListItem">
          <SchoolIcon className='sidebarIcon'/>
          <span className="sidebarListItemText">
            Eğitimler
          </span>
          </li>
        </ul>
        <button className="sidebarButton">
          Daha fazla
        </button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendList">

        <h4 className='close'>Tanıyor Olabileceklerin</h4>

        {Users.map(u=>(
           <CloseFriends key={u.id} user={u}/>
        ))}
          
          
        </ul>

      </div>
    </div>
  )
}

