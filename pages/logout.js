import { useEffect } from "react";
import { useUser } from "../context/user";
// import { supabase } from "../utills/supabase";

const Logout = () => {
  const { logout } = useUser();
  useEffect(() => logout, []);

  return <div>Logging out</div>;
};

export default Logout;
