
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/Components/login/login.component.ts": [
    {
      "path": "chunk-BAVLCPAZ.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-7AEAGY6G.js",
      "dynamicImport": false
    }
  ],
  "src/Components/register/register.component.ts": [
    {
      "path": "chunk-K2SGRQAS.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-7AEAGY6G.js",
      "dynamicImport": false
    }
  ],
  "src/Components/notification/notification.component.ts": [
    {
      "path": "chunk-Q47YG4IE.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-LSRHKETJ.js",
      "dynamicImport": false
    }
  ],
  "src/Components/main/main.component.ts": [
    {
      "path": "chunk-WLTQKFZP.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-MGQIIRTV.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-7AEAGY6G.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-J42UOQLP.js",
      "dynamicImport": false
    }
  ],
  "src/Components/profile/profile.component.ts": [
    {
      "path": "chunk-PIUFBSAG.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-LSRHKETJ.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-J42UOQLP.js",
      "dynamicImport": false
    }
  ],
  "src/Components/postexpanded/postexpanded.component.ts": [
    {
      "path": "chunk-SO55ZURU.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-MGQIIRTV.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-7AEAGY6G.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-J42UOQLP.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 996, hash: '5d84d9af2a4bfd5ce38490e4d32662589716b51addc21240d860c06c7d42499b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1220, hash: '2cbbf6484e854eeb5be3823639ee64de57da21aa9dd431bb130845b43e3c35cb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QBK773LE.css': {size: 983, hash: 'ODbyFzpoQ/o', text: () => import('./assets-chunks/styles-QBK773LE_css.mjs').then(m => m.default)}
  },
};
