const CACHE_NAME = 'my-pwa-cache-v1'
const urlsToCache = ['/', '/index.html', '/manifest.json', '/Logo-Meet.webp']

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
	)
})

self.addEventListener('fetch', event => {
	if (!(event.request.url.indexOf('http') === 0)) return;
	event.respondWith(
		caches
			.match(event.request)
			.then(
				cacheRes =>
					cacheRes ||
					fetch(event.request).then(fetchRes =>
						caches.open(CACHE_NAME).then(cache => {
							cache.put(event.request.url, fetchRes.clone())
							// check cached items size
							limitCacheSize(CACHE_NAME, 75)
							return fetchRes
						})
					)
			)
			.catch(() => caches.match('/fallback'))
	)
})

// cache size limit function
const limitCacheSize = (name, size) => {
	caches.open(name).then(cache => {
		cache.keys().then(keys => {
			if (keys.length > size) {
				cache.delete(keys[0]).then(limitCacheSize(name, size))
			}
		})
	})
}
