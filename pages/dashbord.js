import { supabase } from '../utills/supabase'
import { useUser } from '../context/user'
import axios from 'axios'
import { useRouter } from 'next/router'

const Dashbord = () => {
  const { user, isLoading } = useUser()
  const router = useRouter()

  const loadPortal = async () => {
    const { data } = await axios.get('/api/portal')
    router.push(data.url)
  }

  return (
    <div className="w-full max-w-3xl mx-auto py-16 px-8">
      <h1 className="text-3xl mb-6">マイページ</h1>
      {!isLoading && (
        <>
          <p className="mb-6">
            {user?.is_subscribed
              ? `Subscribed: ${user.interval}`
              : 'Not subscribed'}
          </p>
          <button className="bg-slate-200" onClick={loadPortal}>
            プランを管理する
          </button>
        </>
      )}
    </div>
  )
}

export const getServerSideProps = async ({ req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
      props: {},
    }
  }

  return {
    props: {},
  }
}

export default Dashbord
