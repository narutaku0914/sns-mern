import { Leftbar } from "../../components/leftbar/Leftbar";
import { Rightbar } from "../../components/rightbar/Rightbar";
import { Timeline } from "../../components/timeline/Timeline";
import { Topbar } from "../../components/topbar/Topbar";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Leftbar />
        <Timeline />
        <Rightbar />
      </div>
    </>
  );
};
