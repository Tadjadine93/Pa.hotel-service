"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ServiceController_1 = require("../controllers/ServiceController");
var ServiceRoutes = (function () {
    function ServiceRoutes() {
        this.serviceController = new ServiceController_1.ServiceController();
        this.router = express_1.Router();
        this.routes();
    }
    ServiceRoutes.prototype.routes = function () {
        this.router.get('/', this.serviceController.getAllServices);
        this.router.get('/:id', this.serviceController.getServiceWithId);
        this.router.post('/', this.serviceController.addNewService);
        this.router.put('/:id', this.serviceController.updateService);
        this.router.delete('/:id', this.serviceController.deleteService);
    };
    return ServiceRoutes;
}());
exports.ServiceRoutes = ServiceRoutes;
