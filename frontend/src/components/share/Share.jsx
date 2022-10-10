import { Avatar } from "@mantine/core";
import "./Share.css";

export const Share = ({ user }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <Avatar
            src={PUBLIC_FOLDER + user.profilePicture}
            className="shareProfileImg"
          />
          <input
            type="text"
            className="shareInput"
            placeholder="今なにしてる？"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareButtons">
          <div className="shareOptions">
            <div className="shareOption">
              <i className="fa-solid fa-image"></i>
            </div>
            <div className="shareOption">
              <i className="fa-solid fa-video"></i>
            </div>
            <div className="shareOption">
              <i className="fa-regular fa-face-grin"></i>
            </div>
            <div className="shareOption">
              <i className="fa-solid fa-chart-column"></i>
            </div>
          </div>
          <button className="shareButton">投稿</button>
        </div>
      </div>
    </div>
  );
};
