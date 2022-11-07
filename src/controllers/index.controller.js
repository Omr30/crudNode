import { pool } from "../db.js";

const ping = async(req,res) => {
    const [result] = await pool.query('SELECT "pong" AS result');
    res.json(result[0])
}

export default ping;