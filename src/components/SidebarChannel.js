import React from "react";
import "../components/SidebarChannel.css";

const SidebarChannel = ({ id, channel }) => {
  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarChannel__hash">#</span>
        Chat Room
      </h4>
    </div>
  );
};

export default SidebarChannel;
