
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
      "path": "chunk-PSIT3GRQ.js",
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
      "path": "chunk-K5DX6Y3M.js",
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
    'index.csr.html': {size: 996, hash: 'a17dde6a855660d2f8af59e2a2cde0a2f45d1f9d6eb35080425b4853a2b0bf43', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1220, hash: 'd0865f064dc7e50e50cfb27fe7e0963d303854413f5372b71bef77945c42d6b1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QBK773LE.css': {size: 983, hash: 'ODbyFzpoQ/o', text: () => import('./assets-chunks/styles-QBK773LE_css.mjs').then(m => m.default)}
  },
};
