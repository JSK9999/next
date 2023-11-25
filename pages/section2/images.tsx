/** https://nextjs.org/docs/api-reference/next/image */
import type { NextPage } from 'next';
import Image from 'next/image';

// LegacyImage 는 넥스트 12 기준임
// 왜 13버전에 새로생겼냐면 HTML에 DOM 에 span 태그 생성하고 이미지 앱솔루트로 넣고있어서 직관적이지 않아서 삭제
import LegacyImage from 'next/legacy/image';
import example from '/public/example.jpg';

const Images: NextPage = () => {
  return (
    <main>
      {/* loading check */}
      {/*<section style={{ height: '500vh' }}>long long content</section>*/}

      <hr style={{ margin: '32px 0' }} />

      <h1>img tag</h1>
      {/* 이미지 태그에 지원하는 lazy 속성은 화면에 보일때 나오기 시작해서 네트워크 절약 가능 */}

      {/*<figure>*/}
      {/*  <img*/}
      {/*    src="https://lecture-1.vercel.app/example.jpg"*/}
      {/*    alt="example"*/}
      {/*    width={500}*/}
      {/*    height={100}*/}
      {/*    https://web.dev/browser-level-image-lazy-loading/ */}
      {/*    // loading="lazy"*/}
      {/*  />*/}
      {/*  <figcaption>example img</figcaption>*/}
      {/*</figure> */}

      {/*<hr style={{ margin: '32px 0' }} />*/}

      <h1>next/image</h1>

      {/* next에서 image 태그 가져와서 쓰면 일단 webp 타입으로 가져와서 이미지 최적화도 해줌 용량도 작음 */}
      {/* quality 프로퍼티 값 쓰면 얼마나 최적화 할지 정해줌 default 값은 75, 레이지 로딩도 자동으로 해줌 */}
      {/* 빌드 환경에선 블러 확인 못하고 프로덕션 환경에서 블러 확인 가능 네트워크 속도 조절해서 */}
      {/* 소스파일 static 하게 import 하면 빌드타임에 미리 최적화 가능 */}
      {/* 외부링크 주소로 넣는다면 에러메시지 나온다 너비 같은 프로퍼티 꼭넣어야함 왜냐면 next/Image는 빌드타임에 정보를 못가져오니까 */}
      {/* 외부링크 이미지 써야 되는 상황에는 fill 프로퍼티 넣으면됨 그러면 이미지 사이즈는 부모에 의해 결정되서 꽉채워줌 */}
      {/* 그리고 import 로 안가져오고 ../public//example.jpg 로 스트링 직접 넣으면 외부 링크로 인식함 */}
      {/* 외부링크 쓰면 가끔 외부링크 허용안된다는 에러 문구 뜨는데 next.config.js 에서 도메인 프로퍼티 추가하고 설정 해주면됨 */}
      {/* layout 프로퍼티 추가가능 fixed는 고정, responsive는 원본크기보다 화면이 커지면 맞춰서 커짐, fill은 부모기준 채우도록 사이즈로함,  */}
      {/* layout 디폴트 값은 intrinsic임 기본적으로 원본 이미지 크기로 렌더링하면 화면이 더 작아졌을때 자동 리사이즈함 */}

      <figure>
        <Image
          src={example}
          alt="v13 image"
          // width={500}
          // height={100}
          // placeholder="blur"
        />
        <figcaption>v13 image</figcaption>
      </figure>

      <figure>
        <Image
          src="https://lecture-1.vercel.app/example.jpg"
          alt="v13 image"
          width={500}
          height={100}
        />
        <figcaption>v13 image</figcaption>
      </figure>

      {/* ERROR */}
      {/*<figure>*/}
      {/*  <Image src="/example.jpg" alt="v13 image" />*/}
      {/*  <figcaption>v13 image</figcaption>*/}
      {/*</figure>*/}

      <figure style={{ position: 'relative', width: '500px', height: '100px' }}>
        <Image
          src="https://lecture-1.vercel.app/example.jpg"
          alt="v13 fill"
          fill
          style={{ objectFit: 'cover' }}
        />
      </figure>

      <hr style={{ margin: '32px 0' }} />

      <h1>next/legacy/image</h1>

      {/** statically import */}
      <figure>
        <LegacyImage src={example} alt="example image" />
        <figcaption>intrinsic static image</figcaption>
      </figure>

      {/* ERROR */}
      {/*<figure>*/}
      {/*  <Image src="/example.jpg" alt="example" />*/}
      {/*  <figcaption>example image</figcaption>*/}
      {/*</figure>*/}

      {/** path string */}
      <figure>
        <LegacyImage
          src="/example.jpg"
          alt="intrinsic image"
          width={500}
          height={100}
        />
        <figcaption>intrinsic remote image</figcaption>
      </figure>

      <figure>
        <LegacyImage
          src={example}
          alt="fixed image"
          layout="fixed"
          width={500}
          height={100}
        />
        <figcaption>fixed image</figcaption>
      </figure>

      <figure>
        <LegacyImage
          src={example}
          alt="responsive image"
          layout="responsive"
          width={500}
          height={100}
        />
        <figcaption>responsive image</figcaption>
      </figure>

      <figure>
        <div style={{ width: 500, height: 100, position: 'relative' }}>
          <LegacyImage
            src="/example.jpg"
            alt="fill image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <figcaption>fill image</figcaption>
      </figure>

      <hr style={{ margin: '32px 0' }} />
    </main>
  );
};

export default Images;
