import express from 'express'
import { getProducts, getProduct } from '../controllers/productController.js'

const router = express.Router()

router.route('/').get(getProducts).post(getProduct)

export default router