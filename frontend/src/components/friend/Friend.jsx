import { Avatar } from "@mantine/core";

export const Friend = ({ user }) => {
  return (
    <li className="leftbarFriend">
      <Avatar src={user.profilePicture} className="leftbarFriendImg" />
      <span className="leftbarFriendName">{user.username}</span>
    </li>
  );
};
