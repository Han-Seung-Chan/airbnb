/*global kakao*/
import React, { useEffect } from 'react';

function Map() {
  useEffect(() => {
    let container = document.getElementById('map');

    let options = {
      center: new window.kakao.maps.LatLng(37.85133, 127.734086),
      level: 13,
    };

    let map = new window.kakao.maps.Map(container, options);
  }, []);

  return (
    <div>
      <div id="map" style={{ width: '1000px', height: '800px' }}></div>
    </div>
  );
}

export default Map;
