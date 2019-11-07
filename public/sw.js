/* eslint-disable no-restricted-globals */
/* global importScripts, workbox */
importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
);
self.addEventListener('install', function(event) {
    if (self.skipWaiting) {
        self.skipWaiting();
    }
});
self.addEventListener('fetch', function() {});

if (workbox) {
    workbox.routing.registerRoute(
        /\.(?:js|html)$/,
        new workbox.strategies.NetworkFirst()
    );
    workbox.routing.registerRoute(
        /\.css$/,
        new workbox.strategies.StaleWhileRevalidate()
    );
    workbox.routing.registerRoute(/\//, new workbox.strategies.NetworkFirst());

    console.log('service worker installed');
} else {
    console.log('failed to load workbox');
}
