import { NextFunction, Request, Response } from 'express';
import { RoomType } from '../models/RoomTypeModel';

export class RoomTypeController {
  public async getAllRoomTypes(
    _: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const roomTypes = await RoomType.find();
      return res.status(200).json({ roomTypes });
    } catch (error) {
      next(error);
    }
  }

  public async getRoomTypeWithId(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const id = req.params.id;
    try {
      const roomType = await RoomType.findById( id );
      if (!roomType) {
        throw new Error('Room Type not found');
      }
      return res.status(200).json({ roomType });
    } catch (error) {
      return next(error.message);
    }
  }

  public async addNewRoomType(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const {
        type,
        room_standard_rate,
        room_type_description,
    } = req.body;
    try {
      const roomType = await new RoomType({
        type,
        room_standard_rate,
        room_type_description,
      });
      const roomTypeCreate = await roomType.save();
      res.status(201).json({ roomTypeCreate });
    } catch (error) {
      return next(error.message);
    }
  }

  public async updateRoomType(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const id = req.params.id;
    try {
      const roomTypeUpdate = await RoomType.findByIdAndUpdate(id, req.body);
      res.status(200).json({ roomTypeUpdate });
    } catch (error) {
      return next(error.message);
    }
  }

  public async deleteRoomType(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const id = req.params.id;
    try {
      const roomTypeDelete = await RoomType.findByIdAndRemove( id );
      return res.status(204).json({ roomTypeDelete });
    } catch (error) {
      return next(error.message);
    }
  }
}