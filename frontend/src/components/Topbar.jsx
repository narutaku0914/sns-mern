import { Avatar, Input } from "@mantine/core";
import { IconMessage, IconNotification, IconSearch } from "@tabler/icons";

export const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">MERN</span>
      </div>
      <div className="topbarCenter">
        <div className="serchbar">
          <Input
            icon={<IconSearch size={16} />}
            placeholder="Search"
            radius="xl"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="iconItem">
          <IconMessage />
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="iconItem">
          <IconNotification />
          <span className="topbarIconBadge">2</span>
        </div>
      </div>
      <Avatar src="/assets/person/1.jpeg" />
    </div>
  );
};
