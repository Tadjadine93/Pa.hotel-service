import { Router } from 'express';
import { RoomTypeController } from '../controllers/RoomTypeController';

export class RoomTypeRoutes {
    public roomTypeController: RoomTypeController = new RoomTypeController();
    public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }
    
public routes() {
    this.router.get('/', this.roomTypeController.getAllRoomTypes);
    this.router.get('/:id', this.roomTypeController.getRoomTypeWithId);
    this.router.post('/', this.roomTypeController.addNewRoomType);
    this.router.put('/:id', this.roomTypeController.updateRoomType);
    this.router.delete('/:id', this.roomTypeController.deleteRoomType);
  }
}