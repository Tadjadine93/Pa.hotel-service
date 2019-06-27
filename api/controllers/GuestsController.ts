import { NextFunction, Request, Response } from 'express';
import { Guest } from '../models/GuestsModel';

export class GuestsController {
  public async getAllGuests(
    _: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const guests = await Guest.find();
      return res.status(200).json({ guests });
    } catch (error) {
      next(error);
    }
  }

  public async getGuestWithId(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const id = req.params.id;
    try {
      const guest = await Guest.findById( id );
      if (!guest) {
        throw new Error('Guest not found');
      }
      return res.status(200).json({ guest });
    } catch (error) {
      return next(error.message);
    }
  }

  public async addNewGuest(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const {
        first_name,
        last_name,
        address,
        lat,
        lon
    } = req.body;
    try {
      const guest = await new Guest({
        first_name,
        last_name,
        address,
        lat,
        lon
      });
      const guestCreate = await guest.save();
      res.status(201).json({ guestCreate });
    } catch (error) {
      return next(error.message);
    }
  }

  public async updateGuest(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const id = req.params.id;
    try {
      const guestUpdate = await Guest.findByIdAndUpdate(id, req.body);
      res.status(200).json({ guestUpdate });
    } catch (error) {
      return next(error.message);
    }
  }

  public async deleteGuest(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const id = req.params.id;
    try {
      const guestDelete = await Guest.findByIdAndRemove( id );
      return res.status(204).json({ guestDelete });
    } catch (error) {
      return next(error.message);
    }
  }
}