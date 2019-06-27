import { Router } from 'express';
import { ServiceController } from '../controllers/ServiceController';

export class ServiceRoutes {
    public serviceController: ServiceController = new ServiceController();
    public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }
    
public routes() {
    this.router.get('/', this.serviceController.getAllServices);
    this.router.get('/:id', this.serviceController.getServiceWithId);
    this.router.post('/', this.serviceController.addNewService);
    this.router.put('/:id', this.serviceController.updateService);
    this.router.delete('/:id', this.serviceController.deleteService);
  }
}