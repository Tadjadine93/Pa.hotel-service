import { NextFunction, Request, Response } from 'express';
import { Service } from '../models/ServiceModel';

export class ServiceController {
  public async getAllServices(
    _: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const services = await Service.find();
      return res.status(200).json({ services });
    } catch (error) {
      next(error);
    }
  }

  public async getServiceWithId(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const id = req.params.id;
    try {
      const service = await Service.findById( id );
      if (!service) {
        throw new Error('Service not found');
      }
      return res.status(200).json({ service });
    } catch (error) {
      return next(error.message);
    }
  }

  public async addNewService(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const {
        name,
    } = req.body;
    try {
      const service = await new Service({
        name,
      });
      const serviceCreate = await service.save();
      res.status(201).json({ serviceCreate });
    } catch (error) {
      return next(error.message);
    }
  }

  public async updateService(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const id = req.params.id;
    try {
      const serviceUpdate = await Service.findByIdAndUpdate(id, req.body);
      res.status(200).json({ serviceUpdate });
    } catch (error) {
      return next(error.message);
    }
  }

  public async deleteService(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const id = req.params.id;
    try {
      const serviceDelete = await Service.findByIdAndRemove( id );
      return res.status(204).json({ serviceDelete });
    } catch (error) {
      return next(error.message);
    }
  }
}