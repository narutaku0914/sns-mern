import { Avatar } from "@mantine/core";

export const Friend = ({ user }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="leftbarFriend">
      <Avatar
        src={PUBLIC_FOLDER + user.profilePicture}
        className="leftbarFriendImg"
      />
      <span className="leftbarFriendName">{user.username}</span>
    </li>
  );
};
