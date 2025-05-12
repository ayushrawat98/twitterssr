
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
      "path": "chunk-SO6BHD27.js",
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
    'index.csr.html': {size: 1067, hash: '50a7698ad703888bec6701033b8f87f26707da862acfb5a0564fc2cecce1097a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1292, hash: 'c42470586f30b257e03f57a070b41fda57b8d9c9768dcd08cc2e25c651aebbc8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QBK773LE.css': {size: 983, hash: 'ODbyFzpoQ/o', text: () => import('./assets-chunks/styles-QBK773LE_css.mjs').then(m => m.default)}
  },
};
