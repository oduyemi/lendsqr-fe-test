import React, { useState } from "react";
import { Sidebar } from "../components/dashboard/Sidebar";
import { DashboardHeader } from "../components/dashboard/Header";

export const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

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