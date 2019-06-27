import { NextFunction, Request, Response } from 'express';
import { RoomBookings } from '../models/RoomBookingsModel';

export class RoomBookingsController {
  public async getAllRoomBookings(
    _: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const roomBookings = await RoomBookings.find();
      return res.status(200).json({ roomBookings });
    } catch (error) {
      next(error);
    }
  }

  public async getRoomBookingWithId(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const id = req.params.id;
    try {
      const roomBookings = await RoomBookings.findById( id );
      if (!roomBookings) {
        throw new Error('Room not found');
      }
      return res.status(200).json({ roomBookings });
    } catch (error) {
      return next(error.message);
    }
  }

  public async addNewRoomBooking(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const {
        date_booking_from,
        date_booking_to,
        room_count,
        max_occupancy,
    } = req.body;
    try {
      const roomBookings = await new RoomBookings({
        date_booking_from,
        date_booking_to,
        room_count,
        max_occupancy,
      });
      const roomBookingsCreate = await roomBookings.save();
      res.status(201).json({ roomBookingsCreate });
    } catch (error) {
      return next(error.message);
    }
  }

  public async updateRoomBooking(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const id = req.params.id;
    try {
      const roomBookingsUpdate = await RoomBookings.findByIdAndUpdate(id, req.body);
      res.status(200).json({ roomBookingsUpdate });
    } catch (error) {
      return next(error.message);
    }
  }

  public async deleteRoomBooking(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const id = req.params.id;
    try {
      const roomBookingsDelete = await RoomBookings.findByIdAndRemove( id );
      return res.status(204).json({ roomBookingsDelete });
    } catch (error) {
      return next(error.message);
    }
  }
}