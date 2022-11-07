import { Router } from "express"

const router = Router()

router.get('/employees', (req, res) => {
    res.send('Obteniendo empleados')
})

router.post('/employees', (req, res) => {
    res.send('Creando empleados')
})

router.put('/employees', (req, res) => {
    res.send('Actualizando empleados')
})

router.delete('/employees', (req, res) => {
    res.send('Eliminando empleados')
})


export default router;