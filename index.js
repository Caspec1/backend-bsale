import express from 'express'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'

const app = express()

dotenv.config()

app.use('/api/products', productRoutes)
app.use('/api/category', categoryRoutes)

app.listen(3000)