import React, { useState } from "react";
import Header from "../../components/common/Head/Header";
import Tab from "../../components/common/TabOption/Tab";
import Footer from "../../components/common/Footer/Footer";
import Delivery from "../../components/Delivery/Delivery";
import DiningOut from "../../components/DiningOut/DiningOut";
import NightLife from "../../components/NightLife/NightLife";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("");
  return (
    <div>
      <Header />
      <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* different screen */}
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};
const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out":
      return <DiningOut />;
    case "Nightlife":
      return <NightLife />;
    default:
      return <Delivery />;
  }
};

export default HomePage;
