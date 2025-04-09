import jwt from 'jsonwebtoken'

function authorizeUser(req, res, next) {
    // const authHeader = req.headers['authorization']
    // const token = authHeader && authHeader.split(' ')[1]

    let token = req.cookies.jwt
    
    if (token == null) {
        req.user = null
        next()
    } else {
        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) return res.status(403).json({ message: err })
            req.user = user
            next()
        })
    }
}

export default authorizeUser