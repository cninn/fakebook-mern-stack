import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useState, useEffect, useContext } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user:currentUser} = useContext(AuthContext);

  useEffect(()=>{
    setIsLiked(post.likes.includes(currentUser._id))
  },[currentUser._id,post.likes])

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put("/posts/"+post._id+"/like",{userId:currentUser._id})
    } catch (error) {
      
    }




    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  //!date formatting

  function formatRelativeDate(dateString) {
    const postDate = new Date(dateString);
    const currentDate = new Date();

    // Tarih farkını hesapla
    const timeDifference = currentDate - postDate;

    // Farkı gün, saat, dakika cinsinden hesapla
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );

    // Farka göre uygun metni oluştur
    if (days > 0) {
      return `${days} gün önce`;
    } else if (hours > 0) {
      return `${hours} saat önce`;
    } else if (minutes > 0) {
      return `${minutes} dakika önce`;
    } else {
      return "Şimdi";
    }
  }

  const relativeDate = formatRelativeDate(post.createdAt);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link
              to={`profile/${user.username}`}
              style={{ textDecoration: "none" }}
            >
              <img
                className="postProfileImg"
                src={user.profilePicture ?  PF + user.profilePicture : PF + "noprofile.png"}
                alt="..."
              />
            </Link>
            <span className="postUserName">{user.username}</span>
            <span className="postDate">{relativeDate}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon className="postIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>

          <img className="postImage" src={PF + post.img} alt="..." />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <div className="likeIcons">
              <FavoriteIcon
                htmlColor="red"
                onClick={likeHandler}
                className="likeIcon"
              />
              <ThumbUpIcon
                htmlColor="blue"
                onClick={likeHandler}
                className="likeIcon"
              />
            </div>
          </div>
          <div className="postBottomRight">
            <div>
              <span className="postLikeCounter">{`${like} Beğenme`}</span>
            </div>

            <div className="postCount">
              <InsertCommentIcon className="postCommentIcon" />

              <span className="postCommentText">6 Yorum</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
