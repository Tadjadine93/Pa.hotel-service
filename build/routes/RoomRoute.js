"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var RoomController_1 = require("../controllers/RoomController");
var RoomRoutes = (function () {
    function RoomRoutes() {
        this.roomController = new RoomController_1.RoomController();
        this.router = express_1.Router();
        this.routes();
    }
    RoomRoutes.prototype.routes = function () {
        this.router.get('/', this.roomController.getAllRooms);
        this.router.get('/:id', this.roomController.getRoomWithId);
        this.router.post('/', this.roomController.addNewRoom);
        this.router.put('/:id', this.roomController.updateRoom);
        this.router.delete('/:id', this.roomController.deleteRoom);
    };
    return RoomRoutes;
}());
exports.RoomRoutes = RoomRoutes;
