import { Router } from 'express';
import { GuestsController } from '../controllers/GuestsController';

export class GuestsRoutes {
    public guestController: GuestsController = new GuestsController();
    public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }
    
public routes() {
    this.router.get('/', this.guestController.getAllGuests);
    this.router.get('/:id', this.guestController.getGuestWithId);
    this.router.post('/', this.guestController.addNewGuest);
    this.router.put('/:id', this.guestController.updateGuest);
    this.router.delete('/:id', this.guestController.deleteGuest);
  }
}