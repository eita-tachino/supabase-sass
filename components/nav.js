import Link from "next/link";
import { useUser } from "../context/user";

const Nav = () => {
  const { user } = useUser();

  return (
    <>
      <nav className="flex py-4 px-6 border-b border-gray-200">
        <Link href="/">
          <object>
            <span>🏡Home</span>
          </object>
        </Link>
        {!!user && (
          <object>
            <Link href="/dashbord">
              <span className="ml-2">🕹Dashbord</span>
            </Link>
          </object>
        )}
        <Link href="/pricing">
          <object>
            <span className="ml-2">💸Pricing</span>
          </object>
        </Link>
        <Link href={user ? "/logout" : "/login"}>
          <object>
            <span className="ml-auto">{user ? "Logout" : "Login"}</span>
          </object>
        </Link>
      </nav>
    </>
  );
};

export default Nav;
