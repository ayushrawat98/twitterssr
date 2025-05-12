
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/Components/login/login.component.ts": [
    {
      "path": "chunk-4VOPQY73.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-ECERN3PL.js",
      "dynamicImport": false
    }
  ],
  "src/Components/register/register.component.ts": [
    {
      "path": "chunk-77IUELZY.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-ECERN3PL.js",
      "dynamicImport": false
    }
  ],
  "src/Components/notification/notification.component.ts": [
    {
      "path": "chunk-HFXAA5SY.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-QHNRDZGV.js",
      "dynamicImport": false
    }
  ],
  "src/Components/main/main.component.ts": [
    {
      "path": "chunk-TC3XDR6E.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-4UGJJLBB.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-ECERN3PL.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-MHBETSCG.js",
      "dynamicImport": false
    }
  ],
  "src/Components/profile/profile.component.ts": [
    {
      "path": "chunk-P5OIMYHW.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-QHNRDZGV.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-MHBETSCG.js",
      "dynamicImport": false
    }
  ],
  "src/Components/postexpanded/postexpanded.component.ts": [
    {
      "path": "chunk-5DDL2VEV.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-4UGJJLBB.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-ECERN3PL.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-MHBETSCG.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 1067, hash: 'c0cb2bbfabb5a9028d820dc1362ee72748f5be2eccba36b533472e8a07ea642e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1292, hash: '01ebf03fec4dede420d0b0a94cd92d94cd6905d68ec1294a53d8518162e4e6a1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QBK773LE.css': {size: 983, hash: 'ODbyFzpoQ/o', text: () => import('./assets-chunks/styles-QBK773LE_css.mjs').then(m => m.default)}
  },
};
