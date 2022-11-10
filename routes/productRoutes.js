import express from 'express'
import { getProducts, getProduct } from '../controllers/productController.js'

const router = express.Router()

router.get('/:page/:items', getProducts)
router.post('/all', getProduct)

export default router