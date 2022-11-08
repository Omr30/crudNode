import express from "express";
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express();
const port = 8080;

app.use(express.json())

// Rutas del endpoint
app.use(indexRoutes);
app.use('/api', employeesRoutes);

// Si busca una ruta no existente
app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})