import {pool} from '../db.js'


const getEmployees = async(req, res) => {
    const [rows] = await pool.query('SELECT * FROM employee')
    res.send(rows)
}

const getEmployee = async(req, res) => {
    const {id} = req.params;
    const [row] = await pool.query(`SELECT * FROM employee WHERE id = ${id}`)
    if(row.length <= 0) return res.status(404).json({
        message: 'Employee not fount'
    })
    res.send(row)
}

const createEmployees = async(req, res) => {
    const { name, salary } = req.body;
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
    res.send({
        id: rows.insertId,
        name,
        salary
    })
}

const updateEmployees = async(req, res) => {
    const {id} = req.params;
    const {name, salary} = req.body;
    const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])
    if(result.affectedRows === 0) return res.status(404).json({
        message: 'Employee not fount'
    })
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
    res.send(rows[0]);
}

const deleteEmployees = async(req, res) => {
    const {id} = req.params;
    const [result] = await pool.query(`DELETE FROM employee WHERE id = ${id}`)
    if(result.affectedRows <= 0)return res.status(404).json({
        message: 'Employee not fount'
    }) 
    res.sendStatus(204);
}

export {
    getEmployees,
    createEmployees,
    updateEmployees,
    deleteEmployees,
    getEmployee
};