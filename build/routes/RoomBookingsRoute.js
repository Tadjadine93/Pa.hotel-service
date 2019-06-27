"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var RoomBookingsController_1 = require("../controllers/RoomBookingsController");
var RoomBookingsRoutes = (function () {
    function RoomBookingsRoutes() {
        this.roomBookingsController = new RoomBookingsController_1.RoomBookingsController();
        this.router = express_1.Router();
        this.routes();
    }
    RoomBookingsRoutes.prototype.routes = function () {
        this.router.get('/', this.roomBookingsController.getAllRoomBookings);
        this.router.get('/:id', this.roomBookingsController.getRoomBookingWithId);
        this.router.post('/', this.roomBookingsController.addNewRoomBooking);
        this.router.put('/:id', this.roomBookingsController.updateRoomBooking);
        this.router.delete('/:id', this.roomBookingsController.deleteRoomBooking);
    };
    return RoomBookingsRoutes;
}());
exports.RoomBookingsRoutes = RoomBookingsRoutes;
