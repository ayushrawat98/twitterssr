
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
      "path": "chunk-TZBOJEDD.js",
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
    'index.csr.html': {size: 996, hash: '324afaa500af299eb15e732f5babf5ab17245f890b7870acef360c599082aabe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1220, hash: '932b08fe8cb602688c1085ea2af460fc8fa6917958da7d05a0ae227f03101a62', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QBK773LE.css': {size: 983, hash: 'ODbyFzpoQ/o', text: () => import('./assets-chunks/styles-QBK773LE_css.mjs').then(m => m.default)}
  },
};
