import { Link } from "react-router-dom";
import { Users } from "../../dummyData";
import { Friend } from "../friend/Friend";
import "./Leftbar.css";

export const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="" leftbarWrapper>
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <i class="fa-solid fa-house"></i>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <span className="leftbarListItemText">ホーム</span>
            </Link>
          </li>
          <li className="leftbarListItem">
            <i className="fa-solid fa-magnifying-glass"></i>
            <span className="leftbarListItemText">検索</span>
          </li>
          <li className="leftbarListItem">
            <i class="fa-solid fa-bell"></i>
            <span className="leftbarListItemText">通知</span>
          </li>
          <li className="leftbarListItem">
            <i class="fa-solid fa-message"></i>
            <span className="leftbarListItemText">メッセージ</span>
          </li>
          <li className="leftbarListItem">
            <i class="fa-solid fa-bookmark"></i>
            <span className="leftbarListItemText">ブックマーク</span>
          </li>
          <li className="leftbarListItem">
            <i class="fa-solid fa-user"></i>
            <Link
              to="/profile/:username"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span className="leftbarListItemText">プロフィール</span>
            </Link>
          </li>
          <li className="leftbarListItem">
            <i class="fa-solid fa-gear"></i>
            <span className="leftbarListItemText">設定</span>
          </li>
        </ul>
        <hr></hr>
        <ul className="leftbarFriendList">
          {Users.map((user) => (
            <Friend key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};
