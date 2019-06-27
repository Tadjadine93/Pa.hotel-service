import { Router } from 'express';
import { HotelController } from '../controllers/HotelController';

export class HotelRoutes {
    public hotelController: HotelController = new HotelController();
    public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }
    
public routes() {
    this.router.get('/', this.hotelController.getAllHotels);
    this.router.get('/:id', this.hotelController.getHotelWithId);
    this.router.post('/', this.hotelController.addNewHotel);
    this.router.put('/:id', this.hotelController.updateHotel);
    this.router.delete('/:id', this.hotelController.deleteHotel);
  }
}