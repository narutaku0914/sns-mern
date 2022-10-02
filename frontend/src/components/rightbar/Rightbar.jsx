import { Users } from "../../dummyData";
import { Online } from "../online/Online";
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
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};
