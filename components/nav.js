import Link from 'next/link'
import { useUser } from '../context/user'

const Nav = () => {
  const { user } = useUser()

  return (
    <>
      <nav className="flex py-4 px-6 border-b border-gray-200 cursor-pointer ">
        <Link href="/">
          <a className=" rounded px-4 py-2 hover:bg-slate-50 ">🏡Home</a>
        </Link>
        {!!user && (
          <Link href="/dashbord">
            <a className="ml-2  rounded px-4 py-2 hover:bg-slate-50 ">
              🕹 マイページ
            </a>
          </Link>
        )}
        <Link href="/pricing">
          <a className="ml-2  rounded px-4 py-2 hover:bg-slate-50 ">
            💸 料金プラン
          </a>
        </Link>
        <div className="ml-auto">
          <Link href={user ? '/logout' : '/login'}>
            <a>{user ? 'Logout' : 'Login'}</a>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Nav
