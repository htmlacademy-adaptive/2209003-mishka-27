'use strict';

{
  const yandexMapScript = document.createElement('script');
  yandexMapScript.src = 'https://api-maps.yandex.ru/2.1/?apikey=8ccf966d-4b67-49bd-8aa1-a436d485e6c7&lang=ru_RU';
  yandexMapScript.onload = () => {
    // clean map container
    document.querySelector('#map').querySelector('img').remove();

    const center = [59.938635, 30.323118];

    ymaps.ready(() => {
      const map = new ymaps.Map('map', {
        center: center,
        zoom: 17,
        controls: [],
      });

      const placemark = new ymaps.Placemark(
        center,
        {
          balloonContentHeader: 'Адрес',
          balloonContentBody: 'г. Санкт-Петербург ул. Большая Конюшенная д. 19/8, офис 101',
        },
        {
          iconLayout: 'default#image',
          iconImageHref: './img/icons/map-icon.svg',
          iconImageSize: [67, 100],
          iconImageOffset: [-50, -90],
        }
      );

      map.geoObjects.add(placemark);
    });
  };

  const scrollWindowHanlder = () => {
    if (window.scrollY > 600) {
      document.head.append(yandexMapScript);

      document.removeEventListener('scroll', scrollWindowHanlder);
    }
  };

  document.addEventListener('scroll', scrollWindowHanlder);
}
