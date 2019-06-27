import { NextFunction, Request, Response } from 'express';
import { Bookings } from '../models/BookingsModel';

export class BookingsController {
  public async getAllBookings(
    _: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const bookings = await Bookings.find();
      return res.status(200).json({ bookings, message: 'Successfully got All Bookings!' });
    } catch (error) {
      next(error);
    }
  }

  public async getBookingsWithId(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const id = req.params.id;
    try {
      const booking = await Bookings.findById( id );
      if (!booking) {
        throw new Error('Booking not found');
      }
      return res.status(200).json({ booking, message: 'Successfully got one Booking!' });
    } catch (error) {
      return next(error.message);
    }
  }

  public async addNewBookings(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const {
        date_from,
        date_to
    } = req.body;
    try {
      const booking = await new Bookings({
        date_from,
        date_to
      });
      const bookingCreate = await booking.save();
      res.status(201).json({ bookingCreate, message: 'Successfully created Booking!' });
    } catch (error) {
      return next(error.message);
    }
  }

  public async updateBookings(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const id = req.params.id;
    try {
      const bookingUpdate = await Bookings.findByIdAndUpdate(id, req.body);
      res.status(200).json({ bookingUpdate, message: 'Successfully updated Booking!' });
    } catch (error) {
      return next(error.message);
    }
  }

  public async deleteBookings(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const id = req.params.id;
    try {
      const bookingDelete = await Bookings.findByIdAndRemove( id );
      return res.status(204).json({ bookingDelete, message: 'Successfully deleted Booking!' });
    } catch (error) {
      return next(error.message);
    }
  }
}