import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useState,useEffect } from "react";
import axios from 'axios';



export default function Post({post}) {


const [like,setLike] = useState(post.like)
const [isLiked,setIsLiked] = useState(false)
const [user,setUser] = useState({})
const PF = process.env.REACT_APP_PUBLIC_FOLDER;



useEffect(() => {
  const fetchUser = async () => {
    const res = await axios.get(`users/${post.userId}`);
    setUser(res.data)
    console.log(res.data)
  };
  fetchUser();
}, []);



const likeHandler = ()=>{
    setLike(isLiked ? like-1 : like +1)
    setIsLiked(!isLiked)
}

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={user.profilePicture}
              alt="..."
            />
            <span className="postUserName">{user.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon className="postIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
         
          <img className="postImage" src={PF+post.photo} alt="..." />
        
        
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <div className="likeIcons">
            <FavoriteIcon htmlColor="red" onClick={likeHandler}  className="likeIcon"/>
           < ThumbUpIcon htmlColor="blue" onClick={likeHandler}   className="likeIcon"/>
          
            </div>
     
           
          </div>
          <div className="postBottomRight">
            <div>
            <span className="postLikeCounter">{`${like} Beğenme`}</span>
            </div>
            
                <div className="postCount">
                <InsertCommentIcon className="postCommentIcon" />
           
           <span className="postCommentText">{`${post.comment} Yorum`}</span>
                </div>
    
          </div>
        </div>
      </div>
    </div>
  );
}
