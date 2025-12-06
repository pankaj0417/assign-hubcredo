import axios from "axios";
import VITE_API from "../utils/api";
axios.defaults.withCredentials = true;

export default function LogoutButton() {
  const handleLogout = async () => {
    try {
      await axios.post(
        `${VITE_API}/api/user/logout`,
        {},
        { withCredentials: true }
      );
      window.location.href = "/"; 
      
    } catch (error) {
      console.log("Logout error:", error.response?.data);
    }
  };

  return (
    <button onClick={handleLogout} className="logout-button text-white bg-red-600 px-4 py-2 hover:bg-red-700 hover:shadow-2xl cursor-pointer hover:shadow-red-700 rounded">
      Logout
    </button>
  );
}
