import { pool } from '../config/db.js'

const getCategory = async (req, res) => {
    
    const [result] = pool.query('SELECT * FROM category')

    res.json(result)
}

export {
    getCategory
}