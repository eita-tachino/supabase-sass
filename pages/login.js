import { useEffect } from 'react'
import { useUser } from '../context/user'

const Login = () => {
  const { login } = useUser()

  // useEffect(() => login, [])
  useEffect(login, [])

  return <p>📲 Logging in</p>
}

export default Login
