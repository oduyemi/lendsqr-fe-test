import React from "react";
import {
  Home,
  Users,
  UserCheck,
  CreditCard,
  Layers,
  PiggyBank,
  FileText,
  UserX,
  Percent,
  Briefcase,
  Settings,
  Sliders,
  BadgePercent,
  ClipboardList,
  Landmark,
  ChevronDown
} from "lucide-react";
import "../../styles/dashboard.scss";
import logo from "../../assets/images/logo.svg";

interface Props {
  collapsed: boolean;
}

export const Sidebar: React.FC<Props> = ({ collapsed }) => {
  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      {/* Switch Organization */}
      <div className="switch-org">
        <Briefcase size={16} />
        <span>Switch Organization</span>
        <ChevronDown size={16} />
      </div>

      {/* Dashboard */}
      <div className="menu-section">
        <div className="item">
          <Home size={16} />
          Dashboard
        </div>
      </div>

      {/* Customers */}
      <div className="menu-section">
        <div className="title">CUSTOMERS</div>
        <div className="item active"><Users size={16}/> Users</div>
        <div className="item"><UserCheck size={16}/> Guarantors</div>
        <div className="item"><CreditCard size={16}/> Loans</div>
        <div className="item"><Layers size={16}/> Decision Models</div>
        <div className="item"><PiggyBank size={16}/> Savings</div>
        <div className="item"><FileText size={16}/> Loan Requests</div>
        <div className="item"><UserX size={16}/> Whitelist</div>
        <div className="item"><Percent size={16}/> Karma</div>
      </div>

      {/* Businesses */}
      <div className="menu-section">
        <div className="title">BUSINESSES</div>
        <div className="item"><Briefcase size={16}/> Organization</div>
        <div className="item"><CreditCard size={16}/> Loan Products</div>
        <div className="item"><PiggyBank size={16}/> Savings Products</div>
        <div className="item"><BadgePercent size={16}/> Fees and Charges</div>
        <div className="item"><ClipboardList size={16}/> Transactions</div>
        <div className="item"><Sliders size={16}/> Services</div>
        <div className="item"><UserCheck size={16}/> Service Account</div>
        <div className="item"><Landmark size={16}/> Settlements</div>
        <div className="item"><FileText size={16}/> Reports</div>
      </div>

      {/* Settings */}
      <div className="menu-section">
        <div className="title">SETTINGS</div>
        <div className="item"><Settings size={16}/> Preferences</div>
        <div className="item"><Sliders size={16}/> Fees and Pricing</div>
        <div className="item"><ClipboardList size={16}/> Audit Logs</div>
      </div>
    </div>
  );
};
