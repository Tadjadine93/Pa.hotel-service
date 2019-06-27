"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var RoomTypeController_1 = require("../controllers/RoomTypeController");
var RoomTypeRoutes = (function () {
    function RoomTypeRoutes() {
        this.roomTypeController = new RoomTypeController_1.RoomTypeController();
        this.router = express_1.Router();
        this.routes();
    }
    RoomTypeRoutes.prototype.routes = function () {
        this.router.get('/', this.roomTypeController.getAllRoomTypes);
        this.router.get('/:id', this.roomTypeController.getRoomTypeWithId);
        this.router.post('/', this.roomTypeController.addNewRoomType);
        this.router.put('/:id', this.roomTypeController.updateRoomType);
        this.router.delete('/:id', this.roomTypeController.deleteRoomType);
    };
    return RoomTypeRoutes;
}());
exports.RoomTypeRoutes = RoomTypeRoutes;
