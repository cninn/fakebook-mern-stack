import "./feed.css";
import Share from "../share/Share";
import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/653dcb6beb74b16eff2d4ba8");
      setPosts(res.data)
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
         {posts.map((p)=>(
          <Post key={p.id} post={p}/>
        ))}
      </div>
    </div>
  );
}
