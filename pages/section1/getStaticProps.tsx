// nextjs 는 파일의 경로가 자동등록됨
import type { NextPage } from 'next';

interface Props {
  data: number;
}

const Exapmle: NextPage<Props> = ({ data }) => {
  return (
    <main>
      <h1>getStaticProps Pages</h1>
      <p>값: {data}</p>
    </main>
  );
};

export default Exapmle;

export async function getStaticProps() {
  const delayInsecond = 2;
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve(1), delayInsecond * 1000)
  );

  return {
    props: { data }, // data값이 바뀌어야 revalidate 작동함 아니면 revalidate 설정을 하더라도 개발자도구 docs 탭 내에 header쪽에 etag 변경 안됨
    revalidate: 5, // ISR 방식 지원하기 위한 방식이고 쉽게 말하면 이미 빌드 완료된 정적인 페이지를 주기적으로 업데이트 해줌 (초단위)
  };
}
