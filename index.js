import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import productRoutes from './routes/productRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'

const app = express()
dotenv.config()

app.use(express.json())


// var whitelist = ['http://127.0.0.1:5500/']
var corsOptions = {
    origin: '*'
}
app.use(cors(corsOptions))

app.use('/api/products', productRoutes)
app.use('/api/category', categoryRoutes)

app.listen(3000)