'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6ccdb18ad253f3281026aa9e724a3414",
"assets/assets/images/2fn54mj0bpi11.jpg": "f71cf11ac194ae74455ab1ba035f233a",
"assets/assets/images/aircraft-547105_1920.jpg": "73aa60cb792916c206e358a348ce98ab",
"assets/assets/images/board-453758_1920.jpg": "fd7fff582b02262c7e3377b981048d36",
"assets/assets/images/chair-2584260_1920.jpg": "fdaa10a26ec0dc520b4676d667ef62a7",
"assets/assets/images/child-3264751_1920.jpg": "9663b347aef06dd91ee00e53630ed4b1",
"assets/assets/images/digital-art-420830_1280.png": "390e563218f26adc5348d4ab5fbe2275",
"assets/assets/images/discordlogo.png": "73fa5780ba871e10f7315c0b44504373",
"assets/assets/images/earth-2254769_1920.jpg": "141c1ff01075efe02fba336da3c57506",
"assets/assets/images/engineer-4915457_1920.jpg": "4c1a71a1184350708b502a942defdacd",
"assets/assets/images/game-1926907_1280.png": "cdea9964933ccefbc01ae3290edab985",
"assets/assets/images/globe-5834815_1920.jpg": "2f6289bedd800c39c639b83c9ac2f1ef",
"assets/assets/images/ipad-820272_1920.jpg": "2c40da123fdceb34448ce921b44bb786",
"assets/assets/images/linkedin-logo-vector-22.jpg": "02b194a39719b811797cbe2857b1f8a9",
"assets/assets/images/Logo.png": "292c0f24d44b504384775cf348dec3d9",
"assets/assets/images/Logo@2x.png": "3f6402b90c93c158ed37383815a219b9",
"assets/assets/images/macro-1452987_1920.jpg": "7c81b9a02ed05ca99dea8018e25e26ed",
"assets/assets/images/math-1547018_1920.jpg": "0766375eb14931135f571e25683e0870",
"assets/assets/images/network-3539325_1920.jpg": "9e3f7971dc918b6a532030d35b5c7eb4",
"assets/assets/images/networking.png": "b3794cbf7cca9cbee6f0a7e591f311d3",
"assets/assets/images/question-mark-1872665_1920.jpg": "1d37338ec7d08a5886fa1c7220af88f0",
"assets/assets/images/surgery-1807541_1920.jpg": "9a5536ac283513e834fa82af33b590e7",
"assets/assets/images/trace-3157431_1920.jpg": "513ddd3b7ec81f3a0f1cc5d319740263",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "66b7c1a1e84fdb0edb3e4c1930bacdf3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "3d4112b0ddf8132674929eacc166bb71",
"/": "3d4112b0ddf8132674929eacc166bb71",
"main.dart.js": "ac8e542142e9db8132be06d915f4c581",
"manifest.json": "a9f953ee66c84d0598ee61437e928f73",
"version.json": "d4d25e13ce794e7b1ec1bf7073fcdd1f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
