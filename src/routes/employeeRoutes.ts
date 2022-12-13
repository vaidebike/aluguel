import express from 'express';
import { EmployeeController } from '../controllers/EmployeeController';

const router = express.Router();

//GET /employee/:id POST /employee/
router.get('/:id', EmployeeController.getOne)
  .post('/', EmployeeController.create)
  .get('/', EmployeeController.read)
  .put('/:id', EmployeeController.update)
  .delete('/:id', EmployeeController.delete);

export default router;