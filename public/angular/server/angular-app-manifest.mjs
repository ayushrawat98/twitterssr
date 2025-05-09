
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/Components/login/login.component.ts": [
    {
      "path": "chunk-YZUA553N.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-4LILKTLM.js",
      "dynamicImport": false
    }
  ],
  "src/Components/register/register.component.ts": [
    {
      "path": "chunk-BI7TAGH5.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-4LILKTLM.js",
      "dynamicImport": false
    }
  ],
  "src/Components/notification/notification.component.ts": [
    {
      "path": "chunk-4RKN7UXT.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-RN4H7MPU.js",
      "dynamicImport": false
    }
  ],
  "src/Components/main/main.component.ts": [
    {
      "path": "chunk-2PPIG3A3.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-OLETZS33.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-4LILKTLM.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-LEKSXHYF.js",
      "dynamicImport": false
    }
  ],
  "src/Components/profile/profile.component.ts": [
    {
      "path": "chunk-GVWWJ5BS.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-RN4H7MPU.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-LEKSXHYF.js",
      "dynamicImport": false
    }
  ],
  "src/Components/postexpanded/postexpanded.component.ts": [
    {
      "path": "chunk-YRUJEFGP.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-OLETZS33.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-4LILKTLM.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-LEKSXHYF.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 996, hash: 'd81906d0f1883fb0d1c8b40344a2b5a5a45e352782cf4a24cd788b4c6d3fb383', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1220, hash: '4f3a7bce3dd86ea4de66f67f0b4ba1d788a18ba44486e3ed123042ac05308f6a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QBK773LE.css': {size: 983, hash: 'ODbyFzpoQ/o', text: () => import('./assets-chunks/styles-QBK773LE_css.mjs').then(m => m.default)}
  },
};
