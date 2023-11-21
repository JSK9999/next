// 페이지에서 다른 페이지로 라우팅
import Link from 'next/link';

// 직접 실행해보면
// links 도큐먼트를 한번 가져오고 그이후에 안가져온다 대신 getStaticPops 에 대한 청크 파일 자바스크립트만 가져옴
// -> 이뜻은 최초 실행은 SSG 지만 페이지 라우팅 할떄는 CSR 방식으로 빠르게 이동한다
// json 파일도 생상되는데 거기 데이터 값만 감, 자바스크립트 청크 파일하고 결합해서 DOM 업데이트함
// next 에서 지원하는 Link 덕분임 a 태그 대신에용도

// 링크가 화면 밖에 안보이면 화면 보일때 쯤에 lazy 하게 위에 자바스크립트 파일들 가져옴
// a 태그 완전 대체임

//pre-render 를 통해 seo 지향 하면서 이렇게 링크같은경우는 csr 방식으로 돌게 해서 장점만뽑음
export default function Links() {
  return (
    <main>
      <h1>Links</h1>
      {/* <Link href="/section1/getStaticProps">/getStaticProps</Link> */}
      <div style={{ height: '200vh' }} />
      <Link href="/section1/getStaticProps">/getStaticProps</Link>
    </main>
  );
}
