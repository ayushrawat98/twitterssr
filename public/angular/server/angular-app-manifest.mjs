
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
      "path": "chunk-TFTH6LDI.js",
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
    'index.csr.html': {size: 996, hash: 'dd4378bf35e386b1e4ae714555e0d2ac8433174a84c1e49d5781fe40ac135518', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1220, hash: 'b46b8a9226d1e16592b5682953fb47aa53b462887fa5768d2ca6e6a7af4a4493', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QBK773LE.css': {size: 983, hash: 'ODbyFzpoQ/o', text: () => import('./assets-chunks/styles-QBK773LE_css.mjs').then(m => m.default)}
  },
};
