// import { useEffect, useState } from "react";
import "./Navbar.css";

// Components
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Navbar({ state }) {
  const revertState = () => {
    window.location.reload();
  };

  return (
    <div className="Navbar">
      <div className="Back_Icon">
        <ArrowBackIcon fontSize="large" onClick={revertState} />
      </div>
      <code className="Navbar_Path">
        root/me/{state === 4 ? `contact` : state}
        {state === 4 && ` ~ sudo whoami`}
      </code>
    </div>
  );
}

export default Navbar;
