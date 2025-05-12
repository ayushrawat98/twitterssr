
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
      "path": "chunk-RL377A3O.js",
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
    'index.csr.html': {size: 1387, hash: 'f7c64227c3a071e2675ea4ab2f51559ad218f83659d41cde5f50f6e7dac0c7a1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1612, hash: 'bc00a491027b524d3c20e26fc5eeee45757e725c8fa8ee3ff39c3453d3435292', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QBK773LE.css': {size: 983, hash: 'ODbyFzpoQ/o', text: () => import('./assets-chunks/styles-QBK773LE_css.mjs').then(m => m.default)}
  },
};
