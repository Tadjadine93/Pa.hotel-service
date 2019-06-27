"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var HotelController_1 = require("../controllers/HotelController");
var HotelRoutes = (function () {
    function HotelRoutes() {
        this.hotelController = new HotelController_1.HotelController();
        this.router = express_1.Router();
        this.routes();
    }
    HotelRoutes.prototype.routes = function () {
        this.router.get('/', this.hotelController.getAllHotels);
        this.router.get('/:id', this.hotelController.getHotelWithId);
        this.router.post('/', this.hotelController.addNewHotel);
        this.router.put('/:id', this.hotelController.updateHotel);
        this.router.delete('/:id', this.hotelController.deleteHotel);
    };
    return HotelRoutes;
}());
exports.HotelRoutes = HotelRoutes;
