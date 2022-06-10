import { supabase } from "../utills/supabase";
import Link from "next/link";

// import { useUser } from "../context/user";

export default function Home({ lessons }) {
  // const { user } = useUser();
  // console.log({ user });
  // console.log(supabase.auth.user());
  // console.log(lessons);
  return (
    <>
      <div className="w-full max-w-3xl mx-auto my-16 px-2">
        {lessons.map((lesson) => (
          <Link key={lesson.id} href={`/${lesson.id}`}>
            <span className="p-8 h-40 mb-4 rounded shadow text-xl flex">
              {lesson.title}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const { data: lessons } = await supabase.from("lesson").select("*");
  return {
    props: {
      lessons,
    },
  };
};
