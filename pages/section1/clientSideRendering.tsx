import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
// import NoSSR from '@/components/section1/NoSSR'; - 에러남

const NoSSR = dynamic(() => import('@/components/section1/NoSSR'), {
  ssr: false,
});

// 기본적으로 페이지에 포함되는 컴포넌트는 서버사이드 렌더링 인데 윈도우 객체를 알 수 없기 때문에 useEffect 밖에서 쓰면 에러 남
// SSR 로 렌더링 하기 싫다면 next/dynamic 으로 임포트 해서 ssr:false 로해서 사용하고 서버에서 렌더링 안하기떄문에 HTML 에서도 제거됨 (CSR 방식)
// 근데 이건 기본 request 로 도큐먼트 다운로드 받을때 쓰는 값 초기화 자체가 없음 다이나믹 임포트 하면

const Exapmle: NextPage = () => {
  const [data, setData] = useState(0);

  // 초기값으로 0 html 을 pre-rendering 함 리액트랑 같음
  // 상태가 업데이트 되면서 DOM 업데이트
  useEffect(() => {
    const delayInseconds = 2;
    new Promise<number>((resolve) =>
      setTimeout(() => resolve(Math.random()), delayInseconds * 1000)
    ).then((result) => setData(result));
  }, []);

  return (
    <main>
      <h1>CSR</h1>
      <p>값: {data}</p>
      <NoSSR />
    </main>
  );
};

export default Exapmle;
