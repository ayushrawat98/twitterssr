
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/Components/login/login.component.ts": [
    {
      "path": "chunk-4VOPQY73.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-ECERN3PL.js",
      "dynamicImport": false
    }
  ],
  "src/Components/register/register.component.ts": [
    {
      "path": "chunk-77IUELZY.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-ECERN3PL.js",
      "dynamicImport": false
    }
  ],
  "src/Components/notification/notification.component.ts": [
    {
      "path": "chunk-HFXAA5SY.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-QHNRDZGV.js",
      "dynamicImport": false
    }
  ],
  "src/Components/main/main.component.ts": [
    {
      "path": "chunk-M6RJ2QVZ.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-4UGJJLBB.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-ECERN3PL.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-MHBETSCG.js",
      "dynamicImport": false
    }
  ],
  "src/Components/profile/profile.component.ts": [
    {
      "path": "chunk-P5OIMYHW.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-QHNRDZGV.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-MHBETSCG.js",
      "dynamicImport": false
    }
  ],
  "src/Components/postexpanded/postexpanded.component.ts": [
    {
      "path": "chunk-ASBZYOTQ.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-4UGJJLBB.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-ECERN3PL.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-MHBETSCG.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 1067, hash: 'b78aee0b190156df05ce020c8a61678d0bc438371b5517c637e49f55c286f857', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1292, hash: 'a7bfd938dc2f37c2e54bdfa9296079a807269967b45aaa3cbb18eab9f2da22aa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QBK773LE.css': {size: 983, hash: 'ODbyFzpoQ/o', text: () => import('./assets-chunks/styles-QBK773LE_css.mjs').then(m => m.default)}
  },
};
