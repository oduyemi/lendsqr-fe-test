import { createContext, useContext, useState, ReactNode } from "react";

interface OrgContextType {
  activeOrg: string;
  setActiveOrg: (org: string) => void;
}

const OrganizationContext = createContext<OrgContextType | null>(null);

export const OrganizationProvider = ({ children }: { children: ReactNode }) => {
  const [activeOrg, setActiveOrg] = useState("Lendsqr");

  return (
    <OrganizationContext.Provider value={{ activeOrg, setActiveOrg }}>
      {children}
    </OrganizationContext.Provider>
  );
};

export const useOrganization = () => {
  const context = useContext(OrganizationContext);
  if (!context) throw new Error("useOrganization must be used within OrganizationProvider");
  return context;
};