import { useState, useEffect } from 'react'
import { supabase } from '../utills/supabase'
// import Video from 'react-player'
import ReactPlayer from 'react-player'
// import VimeoPlayer from 'react-player/vimeo'

const LessonDetail = ({ lesson }) => {
  const [videoUrl, setVideoUrl] = useState()

  const getPremiumContent = async () => {
    const { data } = await supabase
      .from('premium_content')
      .select('video_url')
      .eq('id', lesson.id)
      .single()

    setVideoUrl(data?.video_url)
  }

  useEffect(() => {
    getPremiumContent()
  }, [])

  return (
    <div className="w-full max-w-3xl mx-auto py-16 px-8">
      <h1 className="text-3xl mb-6">{lesson.title}</h1>
      <p>{lesson.description}</p>
      {!!videoUrl && (
        <ReactPlayer
          url={videoUrl}
          width="100%"
          controls={true}
          autoPlay
          muted={false}
        />
      )}
      {!videoUrl && (
        <p className="text-orange-500 font-bold my-16">
          このコンテンツは会員限定です。メンバーになって一緒に学んでいきましょう！
          Please subscripe to see the content!
        </p>
      )}
    </div>
  )
}

export const getStaticPaths = async () => {
  const { data: lessons } = await supabase.from('lesson').select('id')

  const paths = lessons.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { id } }) => {
  const { data: lesson } = await supabase
    .from('lesson')
    .select('*')
    .eq('id', id)
    .single()

  return {
    props: {
      lesson,
    },
  }
}

export default LessonDetail
