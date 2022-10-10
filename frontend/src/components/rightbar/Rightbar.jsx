import { Users } from "../../dummyData";
import { Online } from "../online/Online";
import "./Rightbar.css";

export const Rightbar = ({ user }) => {
  return (
    <div className=" rightbar">
      <div className=" rightbarWrapper">
        {user ? (
          <>
            <h4 className="rightbarTitle">ユーザー情報</h4>
            <div className="rightbarInfo">
              <div className="rightbarInfoItem">
                <span className="rightbarInfokey">出身:</span>
                <span className="rightbarInfokey">長野</span>
              </div>
            </div>
            <h4 className="rightbarTitle">友だち</h4>
            <ul className="rightbarFollowings">
              {Users.map((user) => (
                <Online key={user.id} user={user} profile={true} />
              ))}
            </ul>
          </>
        ) : (
          <>
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
                <Online key={user.id} user={user} profile={false} />
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};
