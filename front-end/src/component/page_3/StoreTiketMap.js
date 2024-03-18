import React, { useEffect } from 'react';

function NavDropdownExample() {
  useEffect(() => {
    const { kakao } = window;
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };  
    
    const map = new kakao.maps.Map(container, options);

    // 마커 위치 설정
    const markerPosition = new kakao.maps.LatLng(33.450701, 126.57066);

    // 마커 생성
    const marker = new kakao.maps.Marker({
      map: map,
      position: markerPosition
    });

    // 커스텀 오버레이를 사용하여 마커 아래에 회사 이름 표시
    const content = '<div style="padding: 5px; background-color: white; border: 1px solid black; border-radius: 5px; text-align: center;">우리회사</div>';
    const customOverlay = new kakao.maps.CustomOverlay({
      map: map,
      position: markerPosition,
      content: content,
      yAnchor: -0.5 // 마커 아래에 표시되도록 설정
    });
    
  }, []);

  return (
    <div>
      <div id="map" style={{ width: '500px', height: '500px' }}>Test</div>
    </div>
  );
}

export default NavDropdownExample; 