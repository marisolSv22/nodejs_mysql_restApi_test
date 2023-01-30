//1. importamos primeramente el servicio de express
import express, { json } from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

//2. guardamos en una constante el servicio de express
const app = express()

app.use(express.json());

app.use(indexRoutes);
app.use(employeesRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app;