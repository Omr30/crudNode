import {pool} from '../db.js'


const getEmployees = async(req, res) => {
    const [rows] = await pool.query('SELECT * FROM employee')
    res.send(rows)
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

const updateEmployees = (req, res) => {
    res.send('Actualizando empleados')
}

const deleteEmployees = (req, res) => {
    res.send('Eliminando empleados')
}

export {
    getEmployees,
    createEmployees,
    updateEmployees,
    deleteEmployees
};