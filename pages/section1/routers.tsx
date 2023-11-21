import { useRouter } from 'next/router';
import { useEffect } from 'react';

// links 를 대체 하는 router긴한데 push 를 통해서 지정 할수 있다
// pre-fetch 는 안되서 이건 useEffect 로 추가 해주면 됨

// 그래서 link 가 더 권장되긴함
export default function Routers() {
  const router = useRouter();
  useEffect(() => {
    router.prefetch('/section1/getStaticProps');
  }, [router]);

  return (
    <main>
      <h1>Router</h1>
      <button
        onClick={() => {
          router.push('/section1/getStaticProps');
        }}
      >
        버튼
      </button>
    </main>
  );
}
