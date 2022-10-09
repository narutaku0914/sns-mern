import { Avatar, Indicator, Input } from "@mantine/core";
import { Link } from "react-router-dom";
// import { IconMessage, IconNotification, IconSearch } from "@tabler/icons";
import "./Topbar.css";

export const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">MERN</span>
        </Link>
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
              <i class="fa-solid fa-message"></i>
            </Indicator>
          </div>
          <div className="iconItem">
            <Indicator label={1} inline size={20} color="red">
              <i className="fa-solid fa-bell"></i>
            </Indicator>
          </div>
        </div>
        <Avatar src="/assets/person/1.jpeg" radius={500} />
      </div>
    </div>
  );
};
