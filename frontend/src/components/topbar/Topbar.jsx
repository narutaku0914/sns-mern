import { Avatar, Indicator, Input } from "@mantine/core";
// import { IconMessage, IconNotification, IconSearch } from "@tabler/icons";
import "./Topbar.css";

export const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">MERN</span>
      </div>
      <div className="topbarCenter">
        <div className="serchbar">
          <Input
            icon={<i className="fa-solid fa-magnifying-glass"></i>}
            placeholder="Search"
            radius="xl"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="iconItems">
          <div className="iconItem">
            <Indicator label={2} inline size={20} color="red">
              <i class="fa-regular fa-message fa-xl"></i>
            </Indicator>
          </div>
          <div className="iconItem">
            <Indicator label={1} inline size={20} color="red">
              <i className="fa-regular fa-bell fa-xl"></i>
            </Indicator>
          </div>
        </div>
        <Avatar src="/assets/person/1.jpeg" />
      </div>
    </div>
  );
};
