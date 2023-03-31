import React from "react";
import Sidebar from "../CommonComponents/Sidebar";
import Chat from "../CommonComponents/Chat";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default Home;
