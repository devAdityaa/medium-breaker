(() => {
  console.log("Injected!!!");

  try {
    document.addEventListener('DOMContentLoaded', (event) => {
      const div = document.createElement('div');
      div.setAttribute('id', 'notification');
      div.setAttribute('class', 'notification');

      const rootElement = document.getElementById('root');

      if (rootElement) {
        rootElement.insertBefore(div, rootElement.firstChild);

        const notificationElement = document.getElementById('notification');

        if (notificationElement) {
          notificationElement.innerHTML = 'This article is broken 😈';
        }

        function showNotification() {
          const notification = document.getElementById('notification');

          if (notification) {
            notification.classList.add('show');

            // Hide the notification after 3 seconds
            setTimeout(() => {
              notification.classList.remove('show');
            }, 5000);
          }
        }

        showNotification();

        const infoBar = document.querySelector('body>div:nth-child(1)');

        if (infoBar) {
          infoBar.remove();
        }

        const logoPath = document.querySelector(
          '#root>div>div.l.c>div>div:nth-child(2)>div>a>svg>path'
        );

        if (logoPath) {
          logoPath.setAttribute(
            'd',
            'M 594.79 308.2 c 0 163.76 -131.85 296.52 -194.79 134.8 S 5.8 472 29 330 S 137.65 11.69 300.29 11.69 s 294.5 132.75 294.5 296.51 M 917.86 308.2 c 0 154.16 -65.93 279.12 -107.86 356.8 s -147.25 -125 -147.25 -279.12 S 689.29 29.08 770.61 29.08 s 147.25 125 147.25 279.12 M 1050 308.2 c 39 155.8 -23.19 250.08 -51.79 250.08 s -51.79 -112 -51.79 -250.08 s 23.19 -250.08 51.8 -250.08 S 1050 170.09 1140 360 M 1862.77 37.4 l 0.82 -0.18 v -6.35 h -160.59 l -155.51 365.5 l -155.51 -365.5 h -180.48 v 6.35 l 0.81 0.18 c 30.57 6.9 46.09 17.19 46.09 54.3 v 434.45 c 0 37.11 -15.58 47.4 -46.15 54.3 l -0.81 0.18 V 587 H 1327 v -6.35 l 84 -128.65 c -30.57 -6.9 -46.09 -17.19 -46.09 -54.3 V 116.9 L 1549 510 h 54 l 205.59 -483.21 V 536.9 c -2.62 29.31 -18 38.36 -45.68 44.61 l -0.82 0.19 v 6.3 h 213.3 v -6.3 l -0.82 -0.19 c -27.71 -6.25 -43.46 -15.3 -46.08 -44.61 l -0.14 -445.2 h 0.14 c 0 -37.11 15.52 -47.4 46.08 -54.3 m 97.43 287.8 c 3.49 -78.06 31.52 -134.4 78.56 -135.37 c 14.51 0.24 26.68 5 36.14 14.16 c 20.1 19.51 29.55 60.28 28.09 121.21 z m -85 -70.2 h 250 v -1.05 c -0.71 -59.69 -18 -106.12 -51.34 -138 c -28.82 -27.55 -71.49 -42.71 -116.31 -42.71 h -1 c -23.26 0 -51.79 5.64 -72.09 15.86 c -23.11 10.7 -43.49 26.7 -60.45 47.7 c -27.3 33.83 -43.84 79.55 -47.86 130.93 c -0.13 1.54 -0.24 3.08 -0.35 4.62 s -0.18 2.92 -0.25 4.39 a 332.64 332.64 0 0 0 -0.36 21.69 C 1860.79 507 1923.65 600 2035.3 600 c 98 0 155.07 -71.64 169.3 -167.8 l -7.19 -2.53 c -25 51.68 -69.9 83 -121 79.18 c -69.76 -5.22 -123.2 -75.95 -118.35 -161.63 m 532.69 157.68 c -8.2 19.45 -25.31 30.15 -48.24 30.15 s -43.89 -15.74 -58.78 -44.34 c -16 -30.7 -24.42 -74.1 -24.42 -125.51 c 0 -107 33.28 -176.21 84.79 -176.21 c 21.57 0 38.55 10.7 46.65 29.37 z m 165.84 76.28 c -30.57 -7.23 -46.09 -18 -46.09 -57 V 5.28 L 2424.77 60 v 6.7 l 105.23 -70.7 c 25.62 -2.07 43 1.47 53.09 10.79 c 7.9 7.3 11.75 18.5 11.75 34.26 v 71.14 c -18.31 -11.69 -40.09 -17.38 -66.52 -17.38 c -53.6 0 -102.59 22.57 -137.92 63.56 c -36.83 42.72 -56.3 101.1 -56.3 168.81 C 2230 518.72 2289.53 600 2378.13 600 c 51.83 0 93.53 -28.4 112.62 -76.3 V 588 h 166.65 v -6.66 z m 159.29 -505.33 c 0 -37.76 -28.47 -66.24 -66.24 -66.24 c -37.59 0 -67 29.1 -67 66.24 s 29.44 66.24 67 66.24 c -68.64 -154.09 66.24 -28.48 66.24 -66.24 m 43.84 505.33 c -30.57 -7.23 -46.09 -18 -46.09 -57 h -0.13 V 184 l -166.66 47.85 v 6.5 l 1 0.09 c 36.06 3.21 45.93 15.63 45.93 57.77 V 588 h 166.8 v -6.66 z m 427.05 0 c -30.57 -7.23 -46.09 -18 -46.09 -57 V 166.65 L 3082 212.92 v 6.52 l 0.94 0.1 c 29.48 3.1 38 16.23 38 58.56 v 226 c -9.83 19.45 -28.27 31 -50.61 31.78 c -36.23 0 -56.18 -24.47 -56.18 -68.9 V 166.66 l -166.66 47.85 V 221 l 62.51 143 c 36.06 3.2 45.94 15.62 45.94 57.77 v 191.27 a 214.48 214.48 0 0 0 3.47 39.82 l 3 13.05 c 14.11 50.56 51.08 77 109 77 c 49.06 0 92.06 -30.37 111 -77.89 v 66 h 166.66 v -6.66 z M 3934.2 588 v -6.67 l -0.81 -0.19 c -33.17 -7.65 -46.09 -22.07 -46.09 -51.43 v -243.2 c 0 -75.83 -42.59 -121.09 -113.93 -121.09 c -52 0 -95.85 30.05 -112.73 76.86 c -13.41 -49.6 -52 -76.86 -109.06 -76.86 c -50.12 0 -89.4 26.45 -106.25 71.13 v -69.87 l -166.66 45.89 v 6.54 l 1 0.09 c 35.63 3.16 45.93 15.94 45.93 57 V 588 h 155.5 v -6.66 l -0.82 -0.2 c -26.46 -6.22 -35 -17.56 -35 -46.66 V 443 c 7 -16.35 21.11 -35.72 49 -35.72 c 34.64 0 52.2 24 52.2 71.28 V 588 h 155.54 v -6.66 l -0.82 -0.2 c -26.46 -6.22 -35 -17.56 -35 -46.66 v -248 a 160.45 160.45 0 0 0 -2.2 -27.68 c 7.42 -17.77 22.34 -38.8 51.37 -38.8 c 35.13 0 52.2 23.31 52.2 71.28 V 588 z'
          );
        }
      }
    });
  } catch (e) {}
})();
