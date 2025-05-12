
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/Components/login/login.component.ts": [
    {
      "path": "chunk-Y6QALJRF.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-HR4MFUNG.js",
      "dynamicImport": false
    }
  ],
  "src/Components/register/register.component.ts": [
    {
      "path": "chunk-F5LDUZI5.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-HR4MFUNG.js",
      "dynamicImport": false
    }
  ],
  "src/Components/notification/notification.component.ts": [
    {
      "path": "chunk-UA5XBNNI.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-TTGX6SCS.js",
      "dynamicImport": false
    }
  ],
  "src/Components/main/main.component.ts": [
    {
      "path": "chunk-TE4T4MBF.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-SDCS6T7H.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-HR4MFUNG.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-C2E6W73X.js",
      "dynamicImport": false
    }
  ],
  "src/Components/profile/profile.component.ts": [
    {
      "path": "chunk-WXTWW2BS.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-TTGX6SCS.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-C2E6W73X.js",
      "dynamicImport": false
    }
  ],
  "src/Components/postexpanded/postexpanded.component.ts": [
    {
      "path": "chunk-AT6KCABF.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-SDCS6T7H.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-HR4MFUNG.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-C2E6W73X.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 1387, hash: 'b84b3745932440e24c70fed49bcbd931998fdf8a18e1d6a44da3993aa49778e5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1612, hash: 'ce616f108bf4310016b5157dd5daf029d64cda1231084bbe8886e4e586a85c31', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QBK773LE.css': {size: 983, hash: 'ODbyFzpoQ/o', text: () => import('./assets-chunks/styles-QBK773LE_css.mjs').then(m => m.default)}
  },
};
