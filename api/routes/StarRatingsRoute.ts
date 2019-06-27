import { Router } from 'express';
import { StarRatingsController } from '../controllers/StarRatingsController';

export class StarRatingsRoutes {
    public starRatingsController: StarRatingsController = new StarRatingsController();
    public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }
    
public routes() {
    this.router.get('/', this.starRatingsController.getAllStarRatings);
    this.router.get('/:id', this.starRatingsController.getStarRatingsWithId);
    this.router.post('/', this.starRatingsController.addNewStarRatings);
    this.router.put('/:id', this.starRatingsController.updateStarRatings);
    this.router.delete('/:id', this.starRatingsController.deleteStarRatings);
  }
}