
const getEmployees = (req, res) => {
    res.send('Obteniendo empleados')
}

const createEmployees = (req, res) => {
    res.send('Creando empleados')
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