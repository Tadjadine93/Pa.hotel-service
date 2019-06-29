"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var compression = require("compression");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var express = require("express");
var helmet = require("helmet");
var mongoose = require("mongoose");
var logger = require("morgan");
var BookingsRoute_1 = require("./routes/BookingsRoute");
var GuestsRoute_1 = require("./routes/GuestsRoute");
var HotelRoute_1 = require("./routes/HotelRoute");
var RoomBookingsRoute_1 = require("./routes/RoomBookingsRoute");
var RoomRoute_1 = require("./routes/RoomRoute");
var RoomTypeRoute_1 = require("./routes/RoomTypeRoute");
var ServiceRoute_1 = require("./routes/ServiceRoute");
var StarRatingsRoute_1 = require("./routes/StarRatingsRoute");
var bookingsRouter = new BookingsRoute_1.BookingsRoutes();
var guestsRouter = new GuestsRoute_1.GuestsRoutes();
var hotelRouter = new HotelRoute_1.HotelRoutes();
var roomBookingsRouter = new RoomBookingsRoute_1.RoomBookingsRoutes();
var roomRouter = new RoomRoute_1.RoomRoutes();
var roomTypeRouter = new RoomTypeRoute_1.RoomTypeRoutes();
var serviceRouter = new ServiceRoute_1.ServiceRoutes();
var starRatingsRouter = new StarRatingsRoute_1.StarRatingsRoutes();
var Server = (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        var MONGO_URI = 'mongodb://localhost:27017/pa-hotels-service';
        mongoose.connect(MONGO_URI || process.env.MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true });
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(logger('dev'));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(function (_, res, next) {
            res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
            res.header('Access-Control-Allow-Credentials', 'true');
            next();
        });
    };
    Server.prototype.routes = function () {
        var router = express.Router();
        this.app.use('/', router);
        this.app.use('/bookings', bookingsRouter.router);
        this.app.use('/guests', guestsRouter.router);
        this.app.use('/hotels', hotelRouter.router);
        this.app.use('/roomBookings', roomBookingsRouter.router);
        this.app.use('/rooms', roomRouter.router);
        this.app.use('/roomTypes', roomTypeRouter.router);
        this.app.use('/services', serviceRouter.router);
        this.app.use('/starRatings', starRatingsRouter.router);
    };
    return Server;
}());
exports.default = new Server().app;
