const createError = require('../utils/createError')


exports.listProducts = (req, res, next) => {
    // code
    // throw new Error('Easy handle error')
    try {
        if (true) {
            return createError(400, "Password is wrong")
        }
        res.json({
            message: "Hello Controller List Products"
        })
    } catch (error) {
        next(error)
    }
}

exports.readProducts = (req, res) => {
    try {
        console.log("Hello, GET products")
        res.json({
            message: "Hello, GET products ID"
        })
    } catch (error) {
        next(error)
    }
}

exports.createProducts = (req, res) => {
    try {
        console.log("Hello, GET products")
        res.json({
            message: "Hello, post products ID"
        })
    } catch (error) {
        next(error)
    }
}

exports.updateProducts = (req, res) => {
    try {
        res.json({
            message: "Hello, put products ID"
        })
    } catch (error) {
        next(error)
    }
}

exports.deleteProducts = (req, res) => {
    try {
 
        res.json({
            message: "Hello, delete products ID"
        })
    } catch (error) {
        next(error)
    }

}

