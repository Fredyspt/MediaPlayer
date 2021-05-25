const VERSION = "v1"

self.addEventListener('install', event => {
    // crear precache, una lista de recursos que mantenga en cache
    event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
    const request = event.request;
    // verificar si metodo es get
    if(request.method !== "GET"){
        return;
    }

    // buscar en el cache
    event.respondWith(cachedResponse(request))

    // actualizar el cache
    event.waitUntil(updateCache(request))
})

async function precache(){
    // regresa una promesa
    const cache = await caches.open(VERSION);
    return cache.addAll([
        '/',
        '/index.html', 
        '/assets/index.js', 
        '/assets/MediaPlayer.js', 
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css', 
        '/assets/ejercicio.mp4'
    ])
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION)
    // verificar si ya hay una copia que haga match con el request
    // regresa undefined si no la tiene
    const response = await cache.match(request)
    // si no encuentra una copia del request, realiza el request a internet
    return response || fetch(request)
}

async function updateCache(request) {
    const cache = await caches.open(VERSION)
    const response = await fetch(request)
    // actualiza cache
    return cache.put(request, response)
}