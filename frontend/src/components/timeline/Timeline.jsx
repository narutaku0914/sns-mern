import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Post } from "../post/Post";
import { Share } from "../share/Share";
import "./Timeline.css";

export const Timeline = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const username = user.username;

  useEffect(() => {
    const fetchPost = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get("/posts/timeline/632851a4da4037c85875f77f");
      setPosts(response.data);
    };
    fetchPost();
  }, [username]);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share user={user} />
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};
