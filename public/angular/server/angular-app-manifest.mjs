
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
      "path": "chunk-2NPKVF5Y.js",
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
    'index.csr.html': {size: 1387, hash: '77698daaca5b258bf8089fdfc8c1120f6c758fcef36b461dff506e2b83a23384', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1612, hash: '4fb31cf41c1ce794ff895f2a34dd25d45f2bc06e184263e6ac5ef533bf683d2f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QBK773LE.css': {size: 983, hash: 'ODbyFzpoQ/o', text: () => import('./assets-chunks/styles-QBK773LE_css.mjs').then(m => m.default)}
  },
};
