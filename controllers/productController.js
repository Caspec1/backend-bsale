import { pool } from '../config/db.js'

const getProducts = async (req, res) => {

    const [result] = await pool.query('SELECT * FROM product')

    res.json(result)
}

const getProduct = async (req, res) => {
    const {category, search} = req.body

    if(category !== 0 && search !== '') {
        const [result] = await pool.query(`SELECT * FROM product WHERE category=${category} AND name LIKE '%${search}%'`)
        res.json(result)
    } else if (category === 0 && search !== '') {
        const [result] = await pool.query(`SELECT * FROM product WHERE name LIKE '%${search}%'`)
        res.json(result)
    } else if (category !== 0 && search === '') {
        const [result] = await pool.query(`SELECT * FROM product WHERE category=${category}`)
        res.json(result)
    } else {
        const [result] = await pool.query('SELECT * FROM product')
        res.json(result)
    }
}

export {
    getProducts,
    getProduct
}