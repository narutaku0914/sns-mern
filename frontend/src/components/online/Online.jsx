import { Avatar, Indicator } from "@mantine/core";

export const Online = ({ user, profile }) => {
  return (
    <>
      {profile ? (
        <li className="rightbarFollowing">
          <Avatar
            src={user.profilePicture}
            size={80}
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">{user.username}</span>
        </li>
      ) : (
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
      )}
    </>
  );
};
