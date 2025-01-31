// collect all endpoints

const express = require("express")
const router = express.Router()

const productController = require('../controllers/products')

const {auth} = require('../middlewares/auth')

router.get('/products', auth, productController.listProducts)

router.get('/products/:id', productController.readProducts)

router.post('/products', productController.createProducts)

router.put('/products/:id', productController.updateProducts)

router.delete('/products/:id', productController.deleteProducts)


// export route
module.exports = router;