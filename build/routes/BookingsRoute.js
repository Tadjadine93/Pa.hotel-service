"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var BookingsController_1 = require("../controllers/BookingsController");
var BookingsRoutes = (function () {
    function BookingsRoutes() {
        this.bookingsController = new BookingsController_1.BookingsController();
        this.router = express_1.Router();
        this.routes();
    }
    BookingsRoutes.prototype.routes = function () {
        this.router.get('/', this.bookingsController.getAllBookings);
        this.router.get('/:id', this.bookingsController.getBookingsWithId);
        this.router.post('/', this.bookingsController.addNewBookings);
        this.router.put('/:id', this.bookingsController.updateBookings);
        this.router.delete('/:id', this.bookingsController.deleteBookings);
    };
    return BookingsRoutes;
}());
exports.BookingsRoutes = BookingsRoutes;
