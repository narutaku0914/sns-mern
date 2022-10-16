import { Avatar } from "@mantine/core";
import axios from "axios";
import { useRef, useContext, useState } from "react";
import { AuthContext } from "../../state/AuthContext";
import "./Share.css";

export const Share = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const [file, setFile] = useState();

  const { user } = useContext(AuthContext);
  const description = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      description: description.current.value,
    };

    try {
      axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

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
            ref={description}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareButtons" onSubmit={(e) => handleSubmit(e)}>
          <div className="shareOptions">
            <label className="shareOption" for="file">
              <i className="fa-solid fa-image"></i>
              <input
                type="file"
                id="file"
                accept=".png, .jpeg, /jpg"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
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
          <button className="shareButton" type="submit">
            投稿
          </button>
        </form>
      </div>
    </div>
  );
};
