import Link from 'next/link'
import { useUser } from '../context/user'

const Nav = () => {
  const { user } = useUser()

  return (
    <>
      <nav className="flex py-4 px-6 border-b border-gray-200 cursor-pointer">
        <Link href="/">
          <object>
            <span className=" rounded px-4 py-2 hover:bg-sky-700">🏡Home</span>
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
        <div className="ml-auto">
          <Link href={user ? '/logout' : '/login'}>
            <span>{user ? 'Logout' : 'Login'}</span>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Nav
