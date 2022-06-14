import { useEffect } from 'react'
import { useUser } from '../context/user'

const Login = () => {
  const { login } = useUser()

  // useEffect(() => login, [])
  useEffect(login, [login])

  return <p>ログイン中です</p>
}

export default Login
