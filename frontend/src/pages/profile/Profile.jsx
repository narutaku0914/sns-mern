import { Avatar } from "@mantine/core";
import { Leftbar } from "../../components/leftbar/Leftbar";
import { Rightbar } from "../../components/rightbar/Rightbar";
import { Timeline } from "../../components/timeline/Timeline";
import { Topbar } from "../../components/topbar/Topbar";
import "./Profile.css";

export const Profile = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
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
                src={PUBLIC_FOLDER + "/person/1.jpeg"}
                radius={500}
                size={150}
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">narutaku</h4>
              <span>テスト</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Timeline username="narutaku" />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};
