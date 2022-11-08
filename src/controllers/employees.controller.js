import {pool} from '../db.js'


const getEmployees = async(req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM employee')
        res.send(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

const getEmployee = async(req, res) => {
    try{
        const {id} = req.params;
        const [row] = await pool.query(`SELECT * FROM employee WHERE id = ${id}`)
        if(row.length <= 0) return res.status(404).json({
            message: 'Employee not fount'
        })
        res.send(row)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

const createEmployees = async(req, res) => {
    try{
        const { name, salary } = req.body;
        const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
        res.send({
            id: rows.insertId,
            name,
            salary
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

const updateEmployees = async(req, res) => {
    try {
        const {id} = req.params;
        const {name, salary} = req.body;
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])
        if(result.affectedRows === 0) return res.status(404).json({
            message: 'Employee not fount'
        })
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
        res.send(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

const deleteEmployees = async(req, res) => {
    try{
        const {id} = req.params;
        const [result] = await pool.query(`DELETE FROM employee WHERE id = ${id}`)
        if(result.affectedRows <= 0)return res.status(404).json({
            message: 'Employee not fount'
        }) 
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export {
    getEmployees,
    createEmployees,
    updateEmployees,
    deleteEmployees,
    getEmployee
};