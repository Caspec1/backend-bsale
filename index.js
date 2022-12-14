import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import productRoutes from './routes/productRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'

const app = express()
dotenv.config()

app.use(express.json())

var corsOptions = {
    origin: '*'
}
app.use(cors(corsOptions))

app.use('/api/products', productRoutes)
app.use('/api/category', categoryRoutes)

const PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
    console.log(`Corriendo por el puerto ${PORT}`)
})