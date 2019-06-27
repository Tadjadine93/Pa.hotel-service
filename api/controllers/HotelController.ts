import { NextFunction, Request, Response } from 'express';
import { Hotel } from '../models/HotelModel';

export class HotelController {
  public async getAllHotels(
    _: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const hotels = await Hotel.find();
      return res.status(200).json({ hotels });
    } catch (error) {
      next(error);
    }
  }

  public async getHotelWithId(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const id = req.params.id;
    try {
      const hotel = await Hotel.findById( id );
      /* .populate([{
        path: 'room', model: 'Room', select: '-_id'}, 
        // {path: 'service', model: 'Service'},
        {path: 'star_rating', model: 'StarRatings', select: '-_id'}
      ]); */
      
      if (!hotel) {
        throw new Error('Hotel not found');
      }
      return res.status(200).json({ hotel });
    } catch (error) {
      return next(error.message);
    }
  }

  public async addNewHotel(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const {
        name, 
        description,
        star_rating,
        address,
        lat,
        lon,
    } = req.body;
    try {
      const hotel = await new Hotel({
        name,
        description,
        star_rating,
        address,
        lat,
        lon
      });
      const hotelCreate = await hotel.save();
      res.status(201).json({ hotelCreate });
    } catch (error) {
      return next(error.message);
    }
  }

  public async updateHotel(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const id = req.params.id;
    try {
      const hotelUpdate = await Hotel.findByIdAndUpdate(id, req.body);
      res.status(200).json({ hotelUpdate });
    } catch (error) {
      return next(error.message);
    }
  }

  public async deleteHotel(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const id = req.params.id;
    try {
      const hotelDelete = await Hotel.findByIdAndRemove( id );
      return res.status(204).json({ hotelDelete });
    } catch (error) {
      return next(error.message);
    }
  }
}