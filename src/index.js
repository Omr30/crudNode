import express from "express";
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express();
const port = 8080;

app.use(indexRoutes);
app.use(employeesRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})