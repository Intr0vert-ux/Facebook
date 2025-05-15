import React from "react";
import Navbar from "../../components/home/Navbar";
import Sidebar from "./maincontent/Sidebar";
import Maincontent from "./maincontent/Maincontent";
import AdsSection from "./AdsSection";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Main content page */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[86vh] hide-scrollbar bg-[#F2F4F7]">
        {/* Sidebar */}
        <div className="xl:col-span-3 xl:block hidden">
          <Sidebar />
        </div>
        {/* Main content */}
        <div className="xl:col-span-6 col-span-8">
          <Maincontent />
        </div>
        {/* Ads section */}
        <div className="xl:col-span-3 lg:col-span-4 hidden md:block">
          <AdsSection />
        </div>
      </div>
    </>
  );
};

export default Home;
