import "./feed.css";
import Share from "../share/Share";
import React, { useContext, useEffect, useState } from "react";
import Post from "../Post/Post";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id);
        
      const sortedPosts = res.data.sort((p1, p2) => {
        return p2.createdAt.localeCompare(p1.createdAt);
      });
    
      setPosts(sortedPosts);
    };
    
    fetchPosts();

  }, [username, user._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
