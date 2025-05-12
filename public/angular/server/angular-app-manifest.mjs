
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/Components/login/login.component.ts": [
    {
      "path": "chunk-HTUOXGMG.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-GR6YHOP3.js",
      "dynamicImport": false
    }
  ],
  "src/Components/register/register.component.ts": [
    {
      "path": "chunk-ARCPNDBR.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-GR6YHOP3.js",
      "dynamicImport": false
    }
  ],
  "src/Components/notification/notification.component.ts": [
    {
      "path": "chunk-O6CHSINW.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-T6DLWQDX.js",
      "dynamicImport": false
    }
  ],
  "src/Components/main/main.component.ts": [
    {
      "path": "chunk-F5XHXLEZ.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-G25BJCFI.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-GR6YHOP3.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-EEZQA65K.js",
      "dynamicImport": false
    }
  ],
  "src/Components/profile/profile.component.ts": [
    {
      "path": "chunk-SDEETUKF.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-T6DLWQDX.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-EEZQA65K.js",
      "dynamicImport": false
    }
  ],
  "src/Components/postexpanded/postexpanded.component.ts": [
    {
      "path": "chunk-X33UZAOX.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-G25BJCFI.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-GR6YHOP3.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-EEZQA65K.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 1387, hash: '1af623ae834b6be1ed6814d2d5b46095f1866cf1f29ec29bbd306f38b5505a60', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1612, hash: '4e2d17ebc19dd28b25e14e7488155e59a6f1d0e4a3ae0eb7f9ebfa3d5d581304', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QBK773LE.css': {size: 983, hash: 'ODbyFzpoQ/o', text: () => import('./assets-chunks/styles-QBK773LE_css.mjs').then(m => m.default)}
  },
};
