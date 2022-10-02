import { Avatar, Indicator } from "@mantine/core";
import "./Rightbar.css";

export const Rightbar = () => {
  return (
    <div className=" rightbar">
      <div className=" rightbarWrapper">
        <div className="eventCOntainer">
          <img src="/assets/star.png" alt="" className="starImg" />
          <span className="eventText">
            <b>フォロワー限定イベント</b>開催中!
          </span>
        </div>
        <img src="/assets/ad.jpeg" alt="" className="eventImg" />
        <h4 className="rightbarTitle">オンラインの友達</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <Indicator
              dot
              inline
              size={15}
              color="purple"
              position="top-start"
              offset={3}
              withBorder
            >
              <Avatar
                src="/assets/person/2.jpeg"
                className="rightbarFriendImg"
              />
            </Indicator>
            <span className="rightbarFriendName">ああああ</span>
          </li>
          <li className="rightbarFriend">
            <Indicator
              dot
              inline
              size={15}
              color="purple"
              position="top-start"
              offset={3}
              withBorder
            >
              <Avatar
                src="/assets/person/3.jpeg"
                className="rightbarFriendImg"
              />
            </Indicator>
            <span className="rightbarFriendName">ああああ</span>
          </li>
          <li className="rightbarFriend">
            <Indicator
              dot
              inline
              size={15}
              color="purple"
              position="top-start"
              offset={3}
              withBorder
            >
              <Avatar
                src="/assets/person/2.jpeg"
                className="rightbarFriendImg"
              />
            </Indicator>
            <span className="rightbarFriendName">ああああ</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
