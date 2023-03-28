import { Router } from 'express'
import { deleteEmployees, getEmployees, getEmployee, createEmployees, updateEmployees} from '../controllers/EmployeesController.js'

const router = Router()

router.get('/employees', getEmployees);

router.get('/employees/:id', getEmployee);

router.post('/employees', createEmployees);

router.patch('/employees/:id', updateEmployees);

router.delete('/employees/:id', deleteEmployees);


export default router