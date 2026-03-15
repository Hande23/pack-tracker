const CACHE_NAME="packtracker";

self.addEventListener("install",e=>{
e.waitUntil(
caches.open(CACHE_NAME).then(cache=>{
return cache.addAll(["./"]);
})
);
});

self.addEventListener("fetch",e=>{
e.respondWith(
caches.match(e.request).then(r=>{
return r || fetch(e.request);
})
);
});