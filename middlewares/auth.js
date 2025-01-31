exports.auth = (req, res, next) => {
    if (true) {
        console.log("Hello, middlewares")
        next()
    } else {
        res.json({
            message: "unauthorized"
        })
    }
}