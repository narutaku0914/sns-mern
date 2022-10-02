import { Avatar, Indicator } from "@mantine/core";

export const Online = ({ user }) => {
  return (
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
        <Avatar src={user.profilePicture} className="rightbarFriendImg" />
      </Indicator>
      <span className="rightbarFriendName">{user.username}</span>
    </li>
  );
};
