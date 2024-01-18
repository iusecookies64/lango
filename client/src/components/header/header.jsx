import { useNavigate } from "react-router-dom";
import Profile from "../profile/profile";
import "./style.css";
import { useContext } from "react";
import { AppContext } from "../../App";

export default function Header() {
  const { token } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="header">
      {token ? (
        <div className="back-button" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>
      ) : null}
      <div className="logo">LanGo</div>
      <Profile />
    </div>
  );
}
