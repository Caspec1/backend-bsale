import { pool } from '../config/db.js'

const getProducts = async (req, res) => {
    
    const {page, items} = req.params

    const [data] = await pool.query('SELECT COUNT(*) FROM product')
    const totalData = parseInt(data[0]['COUNT(*)'])

    let offSet;

    if(page == 1) {
        offSet = 0
    } else if(page == 2) {
        offSet = 20
    } else {
        offSet = 40
    }

    const [result] = await pool.query(`SELECT * FROM product LIMIT ${items} OFFSET ${offSet}`)

    res.json({result, totalData})
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