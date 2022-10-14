import { useEffect, useState } from "react";
import axios from "axios";
import { Leftbar } from "../../components/leftbar/Leftbar";
import { Rightbar } from "../../components/rightbar/Rightbar";
import { Timeline } from "../../components/timeline/Timeline";
import { Topbar } from "../../components/topbar/Topbar";
import "./Home.css";
import { useParams } from "react-router-dom";

export const Home = () => {
  const [user, setUser] = useState({});

  const username = useParams().username;
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?username=${username}`);
      setUser(response.data);
    };
    fetchUser();
  }, [username]);
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Leftbar />
        <Timeline username={username} />
        <Rightbar />
      </div>
    </>
  );
};
