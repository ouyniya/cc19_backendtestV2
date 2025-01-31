exports.listProducts = (req, res) => {
    // code
    // throw new Error('Easy handle error')
    const error = new Error("Email is required")
    error.statusCode = 400
    throw error
    
    res.json({
        message: "Hello Controller List Products"
    })
}

exports.readProducts = (req, res) => {
    console.log("Hello, GET products")
    res.json({
        message: "Hello, GET products ID"
    })
}

exports.createProducts = (req, res) => {
    res.json({
        message: "Hello, post products ID"
    })
}

exports.updateProducts = (req, res) => {
    res.json({
        message: "Hello, put products ID"
    })
}

exports.deleteProducts = (req, res) => {
    res.json({
        message: "Hello, delete products ID"
    })
}

