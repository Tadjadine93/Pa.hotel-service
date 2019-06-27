import { NextFunction, Request, Response } from 'express';
import { Room } from '../models/RoomModel';

export class RoomController {
  public async getAllRooms(
    _: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const rooms = await Room.find();
      return res.status(200).json({ rooms });
    } catch (error) {
      next(error);
    }
  }

  public async getRoomWithId(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const id = req.params.id;
    try {
      const room = await Room.findById( id ); // .populate('service', 'name -_id')
      if (!room) {
        throw new Error('Room not found');
      }
      return res.status(200).json({ room });
    } catch (error) {
      return next(error.message);
    }
  }

  public async addNewRoom(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const {
        room_number,
        type,
        beds,
        max_occupancy,
        cost_per_night
    } = req.body;
    try {
      const room = await new Room({
        room_number,
        type,
        beds,
        max_occupancy,
        cost_per_night
      });
      const roomCreate = await room.save();
      res.status(201).json({ roomCreate });
    } catch (error) {
      return next(error.message);
    }
  }

  public async updateRoom(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const id = req.params.id;
    try {
      const roomUpdate = await Room.findByIdAndUpdate(id, req.body);
      res.status(200).json({ roomUpdate });
    } catch (error) {
      return next(error.message);
    }
  }

  public async deleteRoom(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const id = req.params.id;
    try {
      const roomDelete = await Room.findByIdAndRemove( id );
      return res.status(204).json({ roomDelete });
    } catch (error) {
      return next(error.message);
    }
  }
}