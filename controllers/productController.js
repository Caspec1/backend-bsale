import { pool } from '../config/db.js'

const getProducts = async (req, res) => {

    const [result] = await pool.query('SELECT * FROM product')

    res.json(result)
}

export {
    getProducts
}