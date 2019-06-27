import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import * as mongoose from 'mongoose';
import * as logger from 'morgan';

import { BookingsRoutes } from './routes/BookingsRoute';
import { GuestsRoutes } from './routes/GuestsRoute';
import { HotelRoutes } from './routes/HotelRoute';
import { RoomBookingsRoutes } from './routes/RoomBookingsRoute';
import { RoomRoutes } from './routes/RoomRoute';
import { RoomTypeRoutes } from './routes/RoomTypeRoute';
import { ServiceRoutes } from './routes/ServiceRoute';
import { StarRatingsRoutes } from './routes/StarRatingsRoute';

const bookingsRouter: BookingsRoutes = new BookingsRoutes();
const guestsRouter: GuestsRoutes = new GuestsRoutes();
const hotelRouter: HotelRoutes = new HotelRoutes();
const roomBookingsRouter: RoomBookingsRoutes = new RoomBookingsRoutes();
const roomRouter: RoomRoutes = new RoomRoutes();
const roomTypeRouter: RoomTypeRoutes = new RoomTypeRoutes();
const serviceRouter: ServiceRoutes = new ServiceRoutes();
const starRatingsRouter: StarRatingsRoutes = new StarRatingsRoutes();

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config(): void {
    const MONGO_URI: string = 'mongodb://localhost:27017/pa-hotels-service';
    mongoose.connect(MONGO_URI || process.env.MONGODB_URI, { useNewUrlParser: true });

    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(logger('dev'));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());

    this.app.use((_, res: express.Response, next: express.NextFunction) => {
      res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
      res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS',
      );
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials',
      );
      res.header('Access-Control-Allow-Credentials', 'true');
      next();
    });
  }

  public routes(): void {
    const router: express.Router = express.Router();

    this.app.use('/', router);
    this.app.use('/bookings', bookingsRouter.router);
    this.app.use('/guests', guestsRouter.router);
    this.app.use('/hotels', hotelRouter.router);
    this.app.use('/roomBookings', roomBookingsRouter.router);
    this.app.use('/rooms', roomRouter.router);
    this.app.use('/roomTypes', roomTypeRouter.router);
    this.app.use('/services', serviceRouter.router);
    this.app.use('/starRatings', starRatingsRouter.router);

  }
}

export default new Server().app;