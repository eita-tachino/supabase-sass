import { useEffect } from "react";
import { useUser } from "../context/user";
// import { supabase } from "../utills/supabase";

const Login = () => {
  const { login } = useUser();
  useEffect(() => login, []);

  return <p>Logging in</p>;
};

export default Login;
