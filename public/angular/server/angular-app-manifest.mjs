
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
      "path": "chunk-IIH6AE2M.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-JD6RNMT6.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-4LILKTLM.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-ZVZ6XC66.js",
      "dynamicImport": false
    }
  ],
  "src/Components/profile/profile.component.ts": [
    {
      "path": "chunk-6XAY7PY6.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-RN4H7MPU.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-ZVZ6XC66.js",
      "dynamicImport": false
    }
  ],
  "src/Components/postexpanded/postexpanded.component.ts": [
    {
      "path": "chunk-VZZAC6YK.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-JD6RNMT6.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-4LILKTLM.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-ZVZ6XC66.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 996, hash: '17e66a4e633b43d18ee221ad72eb1f32286b70a880e3a854803f6bc61df99dea', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1220, hash: '631470591234b204980279d516a00b81c0374798b21d930717ac3812a494cd87', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QBK773LE.css': {size: 983, hash: 'ODbyFzpoQ/o', text: () => import('./assets-chunks/styles-QBK773LE_css.mjs').then(m => m.default)}
  },
};
