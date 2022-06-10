import { useEffect } from "react";
import { useUser } from "../context/user";
// import { supabase } from "../utills/supabase";

const Login = () => {
  const { login } = useUser();
  useEffect(() => login, []);

  return <div>Logging in</div>;
};

export default Login;
