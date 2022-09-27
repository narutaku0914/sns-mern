import { Avatar } from "@mantine/core";
import "./Leftbar.css";

export const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="" leftbarWrapper>
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <i class="fa-solid fa-house"></i>
            <span className="leftbarListItemText">ホーム</span>
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
            <span className="leftbarListItemText">プロフィール</span>
          </li>
          <li className="leftbarListItem">
            <i class="fa-solid fa-gear"></i>
            <span className="leftbarListItemText">設定</span>
          </li>
        </ul>
        <hr></hr>
        <ul className="leftbarFriendList">
          <li className="leftbarFriend">
            <Avatar src="/assets/person/2.jpeg" className="leftbarFriendImg" />
            <span className="leftbarFriendName">ああああ</span>
          </li>
          <li className="leftbarFriend">
            <Avatar src="/assets/person/2.jpeg" className="leftbarFriendImg" />
            <span className="leftbarFriendName">ああああ</span>
          </li>
          <li className="leftbarFriend">
            <Avatar src="/assets/person/2.jpeg" className="leftbarFriendImg" />
            <span className="leftbarFriendName">ああああ</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
