import { Router } from 'express';
import { RoomBookingsController } from '../controllers/RoomBookingsController';

export class RoomBookingsRoutes {
    public roomBookingsController: RoomBookingsController = new RoomBookingsController();
    public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }
    
public routes() {
    this.router.get('/', this.roomBookingsController.getAllRoomBookings);
    this.router.get('/:id', this.roomBookingsController.getRoomBookingWithId);
    this.router.post('/', this.roomBookingsController.addNewRoomBooking);
    this.router.put('/:id', this.roomBookingsController.updateRoomBooking);
    this.router.delete('/:id', this.roomBookingsController.deleteRoomBooking);
}
}