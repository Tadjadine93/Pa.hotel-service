"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var GuestsModel_1 = require("../models/GuestsModel");
var GuestsController = (function () {
    function GuestsController() {
    }
    GuestsController.prototype.getAllGuests = function (_, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var guests, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, GuestsModel_1.Guest.find()];
                    case 1:
                        guests = _a.sent();
                        return [2, res.status(200).json({ guests: guests })];
                    case 2:
                        error_1 = _a.sent();
                        next(error_1);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    GuestsController.prototype.getGuestWithId = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, guest, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, GuestsModel_1.Guest.findById(id)];
                    case 2:
                        guest = _a.sent();
                        if (!guest) {
                            throw new Error('Guest not found');
                        }
                        return [2, res.status(200).json({ guest: guest })];
                    case 3:
                        error_2 = _a.sent();
                        return [2, next(error_2.message)];
                    case 4: return [2];
                }
            });
        });
    };
    GuestsController.prototype.addNewGuest = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, first_name, last_name, address, lat, lon, guest, guestCreate, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, first_name = _a.first_name, last_name = _a.last_name, address = _a.address, lat = _a.lat, lon = _a.lon;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4, new GuestsModel_1.Guest({
                                first_name: first_name,
                                last_name: last_name,
                                address: address,
                                lat: lat,
                                lon: lon
                            })];
                    case 2:
                        guest = _b.sent();
                        return [4, guest.save()];
                    case 3:
                        guestCreate = _b.sent();
                        res.status(201).json({ guestCreate: guestCreate });
                        return [3, 5];
                    case 4:
                        error_3 = _b.sent();
                        return [2, next(error_3.message)];
                    case 5: return [2];
                }
            });
        });
    };
    GuestsController.prototype.updateGuest = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, guestUpdate, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, GuestsModel_1.Guest.findByIdAndUpdate(id, req.body)];
                    case 2:
                        guestUpdate = _a.sent();
                        res.status(200).json({ guestUpdate: guestUpdate });
                        return [3, 4];
                    case 3:
                        error_4 = _a.sent();
                        return [2, next(error_4.message)];
                    case 4: return [2];
                }
            });
        });
    };
    GuestsController.prototype.deleteGuest = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, guestDelete, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, GuestsModel_1.Guest.findByIdAndRemove(id)];
                    case 2:
                        guestDelete = _a.sent();
                        return [2, res.status(204).json({ guestDelete: guestDelete })];
                    case 3:
                        error_5 = _a.sent();
                        return [2, next(error_5.message)];
                    case 4: return [2];
                }
            });
        });
    };
    return GuestsController;
}());
exports.GuestsController = GuestsController;
