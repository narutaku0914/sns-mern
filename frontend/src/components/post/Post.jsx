import { Avatar } from "@mantine/core";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import "./Post.css";

export const Post = ({ post }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users/${post.userId}`);
      setUser(response.data);
    };
    fetchUser();
  }, [post.userId]);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Avatar
              src={PUBLIC_FOLDER + user.profilePicture}
              className="postProfileImg"
            />
            <span className="postUserName">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.description}</span>
          <img src={PUBLIC_FOLDER + post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <i className="fa-solid fa-heart" onClick={() => handleLike()}></i>
            <span className="postLikeCounter">{like}人のいいね</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentCounter">
              {post.comment}件のコメント
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
