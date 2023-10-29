import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import{ Users} from '../../dummyData'
import { useState } from "react";



export default function Post({post}) {


const [like,setLike] = useState(post.like)
const [isLiked,setIsLiked] = useState(false)
const PF = process.env.REACT_APP_PUBLIC_FOLDER



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
              src={`${PF}/${Users.filter((u) => u.id === post.userId)[0].profilePicture}`}
              alt="..."
            />
            <span className="postUserName">{Users.filter(u=>u.id=== post.userId)[0].username}</span>
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
