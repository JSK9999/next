// 랜딩페이지
import { Fragment, useEffect } from 'react';
import { NextPage } from 'next';
import MapSection from '../components/home/MapSection';
import Header from '../components/home/Header';
import { Store } from '../types/store';
import useStores from '../hooks/useStores';

interface Props {
  stores: Store[];
}

const Home: NextPage<Props> = ({ stores }) => {
  // 매장 데이터
  const { initializeStores } = useStores();

  // rrops로 들어온 새 매장 데이터 들어오면 저장
  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <Fragment>
      <Header />
      <main style={{ width: '100%', height: '100%' }}>
        <MapSection />
      </main>
    </Fragment>
  );
};
export default Home;

// 이걸 보내면 getStaticProps로 렌더링 하게됨
// 여기서 return 하면 Home 컴포넌트에 props 로 넘어옴
export async function getStaticProps() {
  /** TODO: next api routes로 불러오기 */
  const stores = (await import('../public/stores.json')).default;

  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
