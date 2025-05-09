
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
      "path": "chunk-RJDY6BBC.js",
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
    'index.csr.html': {size: 1091, hash: 'bc81b9214efbb59079d844e41c6a8d4b2bee45f441cb853b3fa42df90534d9a8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1316, hash: '364134bc6b7f942583d81f53c13b526f9ddb548d56ac56452f98f05e218f8797', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QBK773LE.css': {size: 983, hash: 'ODbyFzpoQ/o', text: () => import('./assets-chunks/styles-QBK773LE_css.mjs').then(m => m.default)}
  },
};
