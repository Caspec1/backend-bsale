import express from 'express'
import { getProducts, getProduct, getProductsByCategory } from '../controllers/productController.js'

const router = express.Router()

router.route('/:page/:items').get(getProducts).post(getProductsByCategory)
router.post('/all', getProduct)

export default router