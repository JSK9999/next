import type { GetServerSideProps, NextPage } from 'next';

interface Props {
  data: number;
}

// delayInsecond (2초)동안 네트워크에서 pending 상태로 있게 되어 SSR 형식으로 가능하게 함
// 빌드 타임에 pre-render 안되고 request time 에 페이지 들어올때마다 실행됨
// 사용자 경험 안좋아서 필요한 경우에만 써야함 ex - 인증 정보 같이 인증에 따라 화면 달라지는 거같이 보안은 중요한곳에 사용

const Exapmle: NextPage<Props> = ({ data }) => {
  return (
    <main>
      <h1>getServerSideProps</h1>
      <p>값: {data}</p>
    </main>
  );
};

export default Exapmle;

// 이렇게 해서 API mocking 해주면됨
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // api mocking

  // 처음 들어오면 2초간 pending,
  // 5초이내에 새로고침하면 캐시는 stale  - maxage 5
  // 15초 이내에 새로고침하면 캐시는 hit, (캐시된 HTML 보여줌) 그 이후에 새로고침하면 stale 반복 (새로운 HTML 프리렌더)
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=5, stale-while-revalidate=10'
  );

  const delayInsecond = 2;
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve(Math.random()), delayInsecond * 1000)
  );

  return {
    props: { data },
  };
};
