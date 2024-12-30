import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <div className="flex h-screen">
        <div className="w-1/2 bg-blue-500">
          <Content1 onCardClick={handleCardClick} />
        </div>
        <div className="w-1/2 bg-green-500">
          <Content2 selectedCard={selectedCard} />
        </div>
      </div>
    </>
  );
}

export default App;
