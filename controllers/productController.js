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

    try {
        const [result] = await pool.query(`SELECT * FROM product LIMIT ${items} OFFSET ${offSet}`)
        res.json({result, totalData})
    } catch (error) {
        const e = new Error({msg: 'No existen resultados'})
        res.status(404).json({msg: e.message})
    }
    
}

const getProduct = async (req, res) => {
    const {search} = req.body

    try {
        const [result] = await pool.query(`SELECT * FROM product WHERE name LIKE '%${search}%'`)
        if(result.length > 0) {
            res.json(result)
        } else {
            res.json([])
        }
    } catch (error) {
        console.log(error)
    }
}

const getProductsByCategory = async (req, res) => {

    const {page, items} = req.params
    const {id} = req.body

    const [data] = await pool.query(`SELECT COUNT(*) FROM product WHERE category=${id}`)
    const totalData = parseInt(data[0]['COUNT(*)'])

    let offSet;

    if(page == 1) {
        offSet = 0
    } else if(page == 2) {
        offSet = 20
    } else {
        offSet = 40
    }

    try {
        const [result] = await pool.query(`SELECT * FROM product WHERE category=${id} LIMIT ${items} OFFSET ${offSet}`)
        res.json({result, totalData})
    } catch (error) {
        const e = new Error({msg: 'No existen resultados'})
        res.status(404).json({msg: e.message})
    }
}

export {
    getProducts,
    getProduct,
    getProductsByCategory
}