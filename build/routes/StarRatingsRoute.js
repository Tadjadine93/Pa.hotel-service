"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var StarRatingsController_1 = require("../controllers/StarRatingsController");
var StarRatingsRoutes = (function () {
    function StarRatingsRoutes() {
        this.starRatingsController = new StarRatingsController_1.StarRatingsController();
        this.router = express_1.Router();
        this.routes();
    }
    StarRatingsRoutes.prototype.routes = function () {
        this.router.get('/', this.starRatingsController.getAllStarRatings);
        this.router.get('/:id', this.starRatingsController.getStarRatingsWithId);
        this.router.post('/', this.starRatingsController.addNewStarRatings);
        this.router.put('/:id', this.starRatingsController.updateStarRatings);
        this.router.delete('/:id', this.starRatingsController.deleteStarRatings);
    };
    return StarRatingsRoutes;
}());
exports.StarRatingsRoutes = StarRatingsRoutes;
