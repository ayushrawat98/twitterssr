
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/Components/login/login.component.ts": [
    {
      "path": "chunk-26RHYXTM.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-LO7DOOKE.js",
      "dynamicImport": false
    }
  ],
  "src/Components/register/register.component.ts": [
    {
      "path": "chunk-YV7GORXI.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-LO7DOOKE.js",
      "dynamicImport": false
    }
  ],
  "src/Components/notification/notification.component.ts": [
    {
      "path": "chunk-VBEETOBT.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-U6RVHALY.js",
      "dynamicImport": false
    }
  ],
  "src/Components/main/main.component.ts": [
    {
      "path": "chunk-KZGOQZNH.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-IR4LLN35.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-LO7DOOKE.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-CXRYK3VX.js",
      "dynamicImport": false
    }
  ],
  "src/Components/profile/profile.component.ts": [
    {
      "path": "chunk-KFMNZYUO.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-U6RVHALY.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-CXRYK3VX.js",
      "dynamicImport": false
    }
  ],
  "src/Components/postexpanded/postexpanded.component.ts": [
    {
      "path": "chunk-G4T4K3GN.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-IR4LLN35.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-LO7DOOKE.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-CXRYK3VX.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 996, hash: 'd8c6909a328b65e303cee9ba848089541154792089a60ae9a5dd6e86654fdd26', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1220, hash: '79661f6993709731d95ccbf6e2def6633a58e6e63b79b792ab4330c71b2a3e1a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QBK773LE.css': {size: 983, hash: 'ODbyFzpoQ/o', text: () => import('./assets-chunks/styles-QBK773LE_css.mjs').then(m => m.default)}
  },
};
