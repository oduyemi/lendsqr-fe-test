import React from "react";
import { Menu, Search } from "lucide-react";

interface Props {
  toggleSidebar: () => void;
}


export const DashboardHeader: React.FC<Props> = ({ toggleSidebar }) => {
    return (
      <div className="header">
        <div className="d-flex align-items-center gap-3">
          <Menu onClick={toggleSidebar} style={{ cursor: "pointer" }} />
  
          <div className="search input-group">
            <input className="form-control" placeholder="Search for anything" />
            <button className="btn"><Search /></button>
          </div>
        </div>
  
        <div className="d-flex align-items-center gap-3">
          <span>Docs</span>
          <img src="https://i.pravatar.cc/40" style={{ borderRadius: "50%" }} />
        </div>
      </div>
    );
  };