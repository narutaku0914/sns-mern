import { Avatar } from "@mantine/core";
import "./Post.css";

export const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Avatar src="/assets/person/1.jpeg" className="postProfileImg" />
            <span className="postUserName">narutaku</span>
            <span className="postDate">5分前</span>
          </div>
          <div className="postTopRight">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">SNS開発中</span>
          <img src="/assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <i className="fa-solid fa-heart"></i>
            <span className="postLikeCounter">5人のいいね</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentCounter">4: コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
};
