import { useMemo } from 'react';
import { useRouter } from 'next/router';
import Map from './Map';
import Markers from './Markers';
import useMap, { INITIAL_CENTER, INITIAL_ZOOM } from '../../hooks/useMap';
import useCurrentStore from '../../hooks/useCurrentStore';
import type { NaverMap } from '../../types/map';
import type { Coordinates } from '../../types/store';

const MapSection = () => {
  const { initializeMap } = useMap();
  const { clearCurrentStore } = useCurrentStore();

  /** url query 로부터 initial zoom, center 값 설정 */
  const router = useRouter();
  /**
   * asPath는
   * router.asPath === '/?zoom={}&lat={}&lng={}'
   * https://developer.mozilla.org/ko/docs/Web/API/URLSearchParams
   */

  // 이런식으로 연계 화면에 조건 넘길때 쓰면됨
  // URLSearchParams로 쿼리 주소 바꿔주고 하면 줌초기화 시켜주고 센터 초기화 시켜줌

  const query = useMemo(() => new URLSearchParams(router.asPath.slice(1)), []); // eslint-disable-line react-hooks/exhaustive-deps

  // 현재 url 쿼리 파라미터에 값이 있다면,, 으로 연산되는것
  // 연계 할떄 조회화면에 넣으면 쓸만한거지
  const initialZoom = useMemo(
    () => (query.get('zoom') ? Number(query.get('zoom')) : INITIAL_ZOOM),
    [query]
  );
  const initialCenter = useMemo<Coordinates>(
    () =>
      query.get('lat') && query.get('lng')
        ? [Number(query.get('lat')), Number(query.get('lng'))]
        : INITIAL_CENTER,
    [query]
  );

  const onLoadMap = (map: NaverMap) => {
    // map 데이터 첫 저장
    initializeMap(map);
    // 지도 다른 영역 누르면 지워지게
    naver.maps.Event.addListener(map, 'click', clearCurrentStore);
  };

  return (
    <>
      <Map
        onLoad={onLoadMap}
        initialZoom={initialZoom}
        initialCenter={initialCenter}
      />
      <Markers />
    </>
  );
};
export default MapSection;
