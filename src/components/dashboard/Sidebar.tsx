import React, { useState } from "react";import {
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
import { Link } from "react-router-dom";
import "../../styles/dashboard.scss";
import logo from "../../assets/images/logo/logo.svg";
import { useOrganization } from "../../context/organization.context";


interface Props {
  collapsed: boolean;
}

const MenuItem = ({ to, icon, label, active }: any) => (
  <Link to={to} className={`item ${active ? "active" : ""}`}>
    {icon}
    <span className="label">{label}</span>
  </Link>
);

const organizations = ["Lendsqr", "Lendstar", "Irorun", "Paylater"];


export const Sidebar: React.FC<Props> = ({ collapsed }) => {
  const [openOrg, setOpenOrg] = useState(false);
  const { activeOrg, setActiveOrg } = useOrganization();

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div
        className="switch-org"
        onClick={() => setOpenOrg(!openOrg)}
      >
        <Briefcase size={16} />
        <span className="label">{activeOrg}</span>
        <ChevronDown
          size={16}
          className={openOrg ? "rotate" : ""}
        />
      </div>

      {openOrg && (
        <div className="org-dropdown">
          {organizations.map((org) => (
            <div
              key={org}
              className={`org-item ${
                org === activeOrg ? "active" : ""
              }`}
              onClick={() => {
                setActiveOrg(org);
                setOpenOrg(false);
              }}
            >
              {org}
            </div>
          ))}
        </div>
      )}

      <div className="menu-section">
        <MenuItem to="/dashboard" icon={<Home size={16} />} label="Dashboard" />
      </div>

      <div className="menu-section">
        <div className="title">CUSTOMERS</div>
        <MenuItem to="/users" icon={<Users size={16} />} label="Users" active />
        <MenuItem to="/guarantors" icon={<UserCheck size={16} />} label="Guarantors" />
        <MenuItem to="/loans" icon={<CreditCard size={16} />} label="Loans" />
        <MenuItem to="/decision-models" icon={<Layers size={16} />} label="Decision Models" />
        <MenuItem to="/savings" icon={<PiggyBank size={16} />} label="Savings" />
        <MenuItem to="/loan-requests" icon={<FileText size={16} />} label="Loan Requests" />
        <MenuItem to="/whitelist" icon={<UserX size={16} />} label="Whitelist" />
        <MenuItem to="/karma" icon={<Percent size={16} />} label="Karma" />
      </div>

      <div className="menu-section">
        <div className="title">BUSINESSES</div>
        <MenuItem to="/organization" icon={<Briefcase size={16} />} label="Organization" />
        <MenuItem to="/loan-products" icon={<CreditCard size={16} />} label="Loan Products" />
        <MenuItem to="/savings-products" icon={<PiggyBank size={16} />} label="Savings Products" />
        <MenuItem to="/fees" icon={<BadgePercent size={16} />} label="Fees and Charges" />
        <MenuItem to="/transactions" icon={<ClipboardList size={16} />} label="Transactions" />
        <MenuItem to="/services" icon={<Sliders size={16} />} label="Services" />
        <MenuItem to="/service-account" icon={<UserCheck size={16} />} label="Service Account" />
        <MenuItem to="/settlements" icon={<Landmark size={16} />} label="Settlements" />
        <MenuItem to="/reports" icon={<FileText size={16} />} label="Reports" />
      </div>

      <div className="menu-section">
        <div className="title">SETTINGS</div>
        <MenuItem to="/preferences" icon={<Settings size={16} />} label="Preferences" />
        <MenuItem to="/pricing" icon={<Sliders size={16} />} label="Fees and Pricing" />
        <MenuItem to="/audit-logs" icon={<ClipboardList size={16} />} label="Audit Logs" />
      </div>
    </div>
  );
};