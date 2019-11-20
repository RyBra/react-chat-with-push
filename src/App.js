import React from "react";
import ChatWindow from "./components/ChatWindow";
import Launcher from "./components/Launcher";

function App() {
  return (
    <Launcher>
      <ChatWindow></ChatWindow>
    </Launcher>
  );
}

export default App;
