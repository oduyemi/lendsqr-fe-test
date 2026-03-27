import React, { useState, useEffect } from "react";
import { Sidebar } from "../components/dashboard/Sidebar";
import { DashboardHeader } from "../components/dashboard/Header";

export const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 768); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="layout main">
      <Sidebar collapsed={collapsed} />

      <div className="content">
        <DashboardHeader toggleSidebar={() => setCollapsed(!collapsed)} />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};