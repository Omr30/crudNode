import express from "express";

const app = express();
const port = 8080;

app.get('/employees', (req, res) => {
    res.send('Obteniendo empleados')
})

app.post('/employees', (req, res) => {
    res.send('Creando empleados')
})

app.put('/employees', (req, res) => {
    res.send('Actualizando empleados')
})

app.delete('/employees', (req, res) => {
    res.send('Eliminando empleados')
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})