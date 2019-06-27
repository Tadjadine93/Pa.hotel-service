"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var GuestsController_1 = require("../controllers/GuestsController");
var GuestsRoutes = (function () {
    function GuestsRoutes() {
        this.guestController = new GuestsController_1.GuestsController();
        this.router = express_1.Router();
        this.routes();
    }
    GuestsRoutes.prototype.routes = function () {
        this.router.get('/', this.guestController.getAllGuests);
        this.router.get('/:id', this.guestController.getGuestWithId);
        this.router.post('/', this.guestController.addNewGuest);
        this.router.put('/:id', this.guestController.updateGuest);
        this.router.delete('/:id', this.guestController.deleteGuest);
    };
    return GuestsRoutes;
}());
exports.GuestsRoutes = GuestsRoutes;
