import { NextFunction, Request, Response } from 'express';
import { StarRatings } from '../models/StarRatingsModel';

export class StarRatingsController {
  public async getAllStarRatings(
    _: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const starRatings = await StarRatings.find();
      return res.status(200).json({ starRatings });
    } catch (error) {
      next(error);
    }
  }

  public async getStarRatingsWithId(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const id = req.params.id;
    try {
      const starRating = await StarRatings.findById( id );
      if (!starRating) {
        throw new Error('StarRatings not found');
      }
      return res.status(200).json({ starRating });
    } catch (error) {
      return next(error.message);
    }
  }

  public async addNewStarRatings(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const {
        star_rating_code,
        star_rating_image,
    } = req.body;
    try {
      const starRating = await new StarRatings({
        star_rating_code,
        star_rating_image,
      });
      const starRatingCreate = await starRating.save();
      res.status(201).json({ starRatingCreate });
    } catch (error) {
      return next(error.message);
    }
  }

  public async updateStarRatings(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const id = req.params.id;
    try {
      const starRatingUpdate = await StarRatings.findByIdAndUpdate(id, req.body);
      res.status(200).json({ starRatingUpdate });
    } catch (error) {
      return next(error.message);
    }
  }

  public async deleteStarRatings(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const id = req.params.id;
    try {
      const starRatingDelete = await StarRatings.findByIdAndRemove( id );
      return res.status(204).json({ starRatingDelete });
    } catch (error) {
      return next(error.message);
    }
  }
}