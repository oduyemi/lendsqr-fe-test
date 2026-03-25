import { useAuthStore } from "../store/use-auth";
import { useNavigate } from "react-router-dom";
import { Dashboard } from "../components/dashboard/Home";

const DashboardPage = () => {
  const { logout, user } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
      <Dashboard />
  );
};


export default DashboardPage