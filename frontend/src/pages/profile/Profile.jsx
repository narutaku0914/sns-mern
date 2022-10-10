import { Avatar } from "@mantine/core";
import { useEffect, useState } from "react";
import axios from "axios";
import { Leftbar } from "../../components/leftbar/Leftbar";
import { Rightbar } from "../../components/rightbar/Rightbar";
import { Timeline } from "../../components/timeline/Timeline";
import { Topbar } from "../../components/topbar/Topbar";
import "./Profile.css";
import { useParams } from "react-router-dom";

export const Profile = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});

  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?username=${username}`);
      setUser(response.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={PUBLIC_FOLDER + "/post/3.jpeg"}
                alt=""
                className="profileCoverImg"
              />
              <Avatar
                src={PUBLIC_FOLDER + user.profilePicture}
                radius={500}
                size={150}
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span>{user.description}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Timeline user={user} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};
