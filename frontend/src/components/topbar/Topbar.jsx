import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const logoutHandler = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">ImgUpl</span>
        </Link>
      </div>
      
      <div className="topbarRight">
       
        <button className="logoutButton" onClick = {logoutHandler}>Logout</button>
        
      </div>
    </div>
  );
}
