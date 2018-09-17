importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([
  {
    "url": "cancel.svg",
    "revision": "fa1b1ead4e3161348a82dedf66e26805"
  },
  {
    "url": "clock.jpg",
    "revision": "8d58fb3c8b64282ef1f2f3d7e8d82661"
  },
  {
    "url": "clock.png",
    "revision": "ec97d5ffd095fe9e8bb518cdfdf29b6e"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "e24674fef7c08a39e6c5cf66a9bb86d5"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "6add06ca603bb58e67b1e52a2f4483ca"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "fc76bfc76744b065380d4f1176931a8c"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "615f8e03f8468ba7975fa477f71e2723"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "9af790f900c4d0a841a7998f860adff9"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "df48f9dd00243e89e8791e1c447fdf92"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "240ea64357b5128ea0248777fbd10da2"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "20a78a6b9dcd1fb3cafea454fc224ded"
  },
  {
    "url": "index.html",
    "revision": "ffeacd5c0e08137e81b6aae32ee5990e"
  },
  {
    "url": "js/app.js",
    "revision": "6adc98e59d9508a35faf802b42657fd6"
  },
  {
    "url": "js/jquery-3.2.1.min.js",
    "revision": "c9f5aeeca3ad37bf2aa006139b935f0a"
  },
  {
    "url": "main.css",
    "revision": "0eb4a6dbf1f5a20599d3877feff9e45b"
  },
  {
    "url": "manifest.json",
    "revision": "0826ba7fcc09d4905265df6e6ca42432"
  },
  {
    "url": "src-sw.js",
    "revision": "8e8529a90433fe096d9fbb805a7b872a"
  },
  {
    "url": "workbox-config.js",
    "revision": "cc67387f8bedea8b412ab08c9fdb4ca4"
  }
]);

workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
    ],
  }),
);