import { Avatar } from "@mantine/core";
import { Users } from "../../dummyData";
import "./Post.css";

export const Post = ({ post }) => {
  const user = Users.filter((user) => user.id === post.userId)[0];

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Avatar src={user.profilePicture} className="postProfileImg" />
            <span className="postUserName">{user.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <i className="fa-solid fa-heart"></i>
            <span className="postLikeCounter">{post.like}人のいいね</span>
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
