import express from "express"
import { sync } from "./models/sync.js"
import { router as PostRouter } from './routes/post.route.js'
import { router as AuthRouter } from './routes/auth.route.js'
import { router as UserRouter } from './routes/user.route.js'
import cors from 'cors'
import compression from "compression"
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
import https from 'https'
import fs from 'fs'
import helmet from 'helmet'
import cookieParser from "cookie-parser"

const app = express()
dotenv.config()
sync()
// if (process.env.NODE_ENV === 'production') {
//     app.use(cors({
//         origin : 'https://khichdi.life',
//         credentials : true
//     }))
// }else{
    app.use(cors({
        origin : 'http://localhost:4200',
        credentials : true
    }))
// }

app.use(cookieParser())
app.use(compression())

// if (process.env.NODE_ENV === 'production') {
//     //safety
//     app.use(helmet({
//         contentSecurityPolicy: false,
//     }))
// }

app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), "public"), { etag : false, maxAge: "24h" }));
app.use(express.json())
app.use('/api/auth', AuthRouter)
app.use('/api/post', PostRouter)
app.use('/api/user', UserRouter)

// start server
// if (process.env.NODE_ENV === 'development') {
    // create server local
    app.listen(3000, (ex) => {
        console.log(process.env.PORT)
    })
// } else if (process.env.NODE_ENV === 'production') {
//     const options = {
//         key: fs.readFileSync('/etc/letsencrypt/live/khichdi.life/privkey.pem'),
//         cert: fs.readFileSync('/etc/letsencrypt/live/khichdi.life/fullchain.pem')
//     };

//     https.createServer(options, app).listen(3000, () => {
//         console.log('API server running on https://khichdi.life');
//     });
// }