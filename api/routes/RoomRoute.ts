import { Router } from 'express';
import { RoomController } from '../controllers/RoomController';

export class RoomRoutes {
    public roomController: RoomController = new RoomController();
    public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }
    
public routes() {
    this.router.get('/', this.roomController.getAllRooms);
    this.router.get('/:id', this.roomController.getRoomWithId);
    this.router.post('/', this.roomController.addNewRoom);
    this.router.put('/:id', this.roomController.updateRoom);
    this.router.delete('/:id', this.roomController.deleteRoom);
  }
}