'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "59a2170ac7d9f5d72523641576dcfab8",
"index.html": "feb7df27a4047e4d91e1edaa170e2a5f",
"/": "feb7df27a4047e4d91e1edaa170e2a5f",
"main.dart.js": "5e7b0f45327c408aab437cf8aba2b4e2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "efc4b94af942fd8b8b1c06941de47b38",
"assets/AssetManifest.json": "9720a8be534fac3671e0ab4aa9a88d16",
"assets/NOTICES": "0d7e61512fc6be13dd7f58ab7e31cd0c",
"assets/FontManifest.json": "7748e964695ed10ae5c91196382d65a8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/flutter_login/assets/images/ecorp.png": "24e80e9441acf073076893cebbe60ac0",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/packages/sign_in_button/assets/logos/google_dark.png": "d18b748c2edbc5c4e3bc221a1ec64438",
"assets/packages/sign_in_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/sign_in_button/assets/logos/2.0x/google_dark.png": "68d675bc88e8b2a9079fdfb632a974aa",
"assets/packages/sign_in_button/assets/logos/2.0x/google_light.png": "1f00e2bbc0c16b9e956bafeddebe7bf2",
"assets/packages/sign_in_button/assets/logos/2.0x/facebook_new.png": "dd8e500c6d946b0f7c24eb8b94b1ea8c",
"assets/packages/sign_in_button/assets/logos/3.0x/google_dark.png": "c75b35db06cb33eb7c52af696026d299",
"assets/packages/sign_in_button/assets/logos/3.0x/google_light.png": "3aeb09c8261211cfc16ac080a555c43c",
"assets/packages/sign_in_button/assets/logos/3.0x/facebook_new.png": "689ce8e0056bb542425547325ce690ba",
"assets/packages/sign_in_button/assets/logos/facebook_new.png": "93cb650d10a738a579b093556d4341be",
"assets/shaders/ink_sparkle.frag": "59a1881da0026f5e6b542f25c657964a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/demo_img.png": "e58ed726b03251184a4f8ec2e86bd4c1",
"assets/assets/images/busan_logo.png": "e6e91661ddb36347ff9934a8d7f9dcf0",
"assets/assets/images/bx-qr-scan.png": "4c30433b8901dfb789ecd0e01bd5b2f3",
"assets/assets/images/bx-qr-scan.svg": "0aec10c9821fc5ce78ae289c9b437bf4",
"assets/assets/images/prenet_logo.svg": "fe09f258019eda25569cb287e45bf748",
"assets/assets/images/klaytn_logo.svg": "135a5e22959610be52fdf201213eaec5",
"assets/assets/images/prenet_logo2.svg": "2761b48905bb05c40975742b7123bd6d",
"assets/assets/images/select-image.png": "a491367b205ecb441a93c0afa6483fd7",
"assets/assets/images/klaytn-logo-green.png": "6c5629077fe16e05c71e2157880214bf",
"assets/assets/images/tp_logo.png": "c3805938cf442bdd4686084b3e8da356",
"assets/assets/images/send_klay_icon.svg": "13f3229d50bf3835e0a523d9f11e7405",
"assets/assets/images/prenet_card_logo.svg": "6e5d0e3be3200e04666a364b164fa454",
"assets/assets/images/placeholder.jpg": "0d76c36102ab7301fb582fe101acb506",
"assets/assets/images/kisa_logo.png": "21d5f01b5351904938c42e5526b2f582",
"assets/assets/images/bottom1.png": "6b84f28383721d9658f43202fc05df65",
"assets/assets/images/demo_widget.png": "cc581ff2a6c3999257042e47202c3ae0",
"assets/assets/images/top2.png": "5ba82c2d5a07482a351172f7b5ebcfb7",
"assets/assets/images/bottom2.png": "d75870ab4305146f8f4098192422a4d2",
"assets/assets/images/top1.png": "b080bce9f5b1ea61f79200807d3d154d",
"assets/assets/images/profileImage.png": "7af0895ea8f488897a37306bc6d6b56f",
"assets/assets/images/profile_img.jpeg": "99f8f6d50c6b8abb0ab879bd2d8ac629",
"assets/assets/images/msit_logo.png": "0cf5939d4ce25051418e5b2ccb8089f9",
"assets/assets/images/madapp_logo.png": "6b6122865c64ffa0b2d2711e17c35ef6",
"assets/assets/images/prenet_txt.svg": "9a36303250fbefc7cced83c2a4ab4f85",
"assets/assets/fonts/Pretendard-Regular.otf": "46b0c48afd8b0ddc2ed4fcbb2df81d8b",
"assets/assets/fonts/Pretendard-Black.otf": "6bc3f501ba4e736b706074a29826ec0a",
"assets/assets/fonts/Pretendard-Medium.otf": "9ac30a1a68a5140a58b23aaf8025f1db",
"assets/assets/fonts/SpoqaHanSansNeo-Regular.ttf": "2118fb0c3ef472cc03c7fd589c59ae05",
"assets/assets/fonts/SpoqaHanSansNeo-Medium.ttf": "1c177bbda2f670a03abce8f15bbad484",
"assets/assets/fonts/Pretendard-Light.otf": "aef3dc5f5592a0a9bfd7e8de7abdc2c5",
"assets/assets/fonts/Pretendard-ExtraBold.otf": "dac19e30ed93b7aed171830c38cda6a2",
"assets/assets/fonts/Pretendard-Bold.otf": "e93f79700405e1b4c1b3e70d8c378ca4",
"assets/assets/fonts/SpoqaHanSansNeo-Light.ttf": "10959d83c4a36caa81a804df6d9c0400",
"assets/assets/fonts/SpoqaHanSansNeo-Bold.ttf": "4db68f99b1aa69d92a0366c31c384383",
"assets/assets/fonts/SpoqaHanSansNeo-Thin.ttf": "4cb52f730d1f6281fac53066012c509c",
"assets/assets/fonts/Pretendard-Thin.otf": "0b09a12c024a6380cd40dbfaf2fd79cd",
"assets/assets/fonts/Pretendard-ExtraLight.otf": "23002daa2dee07f8a652bb0ab06af079",
"assets/assets/fonts/Pretendard-SemiBold.otf": "d9d912f2630bae445757f4769271c35c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
