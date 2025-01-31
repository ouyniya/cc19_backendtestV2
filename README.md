# Server
## Step 1 install package

```bash
npm init -y
```

## Step 2 install lib

```bash
npm install express cors nodemon morgan dotenv
```

## Step 3 Create index.js

## Step 4 Edit package.json
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
```

## Step 5 create .env file in main folder and update code in index.js
```js
require('dotenv').config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// start server
// const PORT = 8000
const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`server is running on port  ${PORT}`))
```

## create folder `routes` 

## create file `products.js` in `routes` 
```bash
// collect all endpoints

const express = require("express")
const router = express.Router()


router.get('/products', (req, res) => {
    console.log("Hello, GET products")
    res.json({
        message: "Hello, GET products"
    })
})


// export route
module.exports = router;
```

## Step 6 update code in index.js
```js

```