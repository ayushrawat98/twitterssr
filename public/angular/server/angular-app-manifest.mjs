
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
      "path": "chunk-MAGYS6CA.js",
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
    'index.csr.html': {size: 1067, hash: '75c530e8a8d5d1a728314a004d4f372ea918dd29c25521ba30ec8ccba91f845b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1292, hash: '12b272ec7ee70c4bed5aac8e88a96b2f71ff46d5851cf7cf2691c45eb7106308', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QBK773LE.css': {size: 983, hash: 'ODbyFzpoQ/o', text: () => import('./assets-chunks/styles-QBK773LE_css.mjs').then(m => m.default)}
  },
};
