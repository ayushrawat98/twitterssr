
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
      "path": "chunk-GHKCYHFL.js",
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
    'index.csr.html': {size: 996, hash: 'e3edf047b8dea39bac84e8a7e4e96877c00d2fa2720f319b2d81e383201c4b50', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1220, hash: 'beec53b8a66cce5506dc7013c96f7e6c773984d053b08ff27761fbdd92b135fe', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QBK773LE.css': {size: 983, hash: 'ODbyFzpoQ/o', text: () => import('./assets-chunks/styles-QBK773LE_css.mjs').then(m => m.default)}
  },
};
