"use client";

import { MdOutlineLogout } from "react-icons/md";
import { logout } from "@/app/auth/actions";

const LogoutButton = () => {
  const handleLogout = async () => {
    await logout(); // Call the server action to log out
    window.location.reload(); // Reload the page to update the state (or redirect to login if needed)
  };

  return (
    <button onClick={handleLogout} type="button">
      <MdOutlineLogout className="text-2xl " />
    </button>
  );
};

export default LogoutButton;
