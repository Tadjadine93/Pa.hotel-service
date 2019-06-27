import { Router } from 'express';
import { BookingsController } from '../controllers/BookingsController';

export class BookingsRoutes {
    public bookingsController: BookingsController = new BookingsController();
    public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }
    
public routes() {
    this.router.get('/', this.bookingsController.getAllBookings);
    this.router.get('/:id', this.bookingsController.getBookingsWithId);
    this.router.post('/', this.bookingsController.addNewBookings);
    this.router.put('/:id', this.bookingsController.updateBookings);
    this.router.delete('/:id', this.bookingsController.deleteBookings);
  }
}