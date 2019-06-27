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
var RoomModel_1 = require("../models/RoomModel");
var RoomController = (function () {
    function RoomController() {
    }
    RoomController.prototype.getAllRooms = function (_, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var rooms, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, RoomModel_1.Room.find()];
                    case 1:
                        rooms = _a.sent();
                        return [2, res.status(200).json({ rooms: rooms })];
                    case 2:
                        error_1 = _a.sent();
                        next(error_1);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    RoomController.prototype.getRoomWithId = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, room, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, RoomModel_1.Room.findById(id)];
                    case 2:
                        room = _a.sent();
                        if (!room) {
                            throw new Error('Room not found');
                        }
                        return [2, res.status(200).json({ room: room })];
                    case 3:
                        error_2 = _a.sent();
                        return [2, next(error_2.message)];
                    case 4: return [2];
                }
            });
        });
    };
    RoomController.prototype.addNewRoom = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, room_number, type, beds, max_occupancy, cost_per_night, room, roomCreate, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, room_number = _a.room_number, type = _a.type, beds = _a.beds, max_occupancy = _a.max_occupancy, cost_per_night = _a.cost_per_night;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4, new RoomModel_1.Room({
                                room_number: room_number,
                                type: type,
                                beds: beds,
                                max_occupancy: max_occupancy,
                                cost_per_night: cost_per_night
                            })];
                    case 2:
                        room = _b.sent();
                        return [4, room.save()];
                    case 3:
                        roomCreate = _b.sent();
                        res.status(201).json({ roomCreate: roomCreate });
                        return [3, 5];
                    case 4:
                        error_3 = _b.sent();
                        return [2, next(error_3.message)];
                    case 5: return [2];
                }
            });
        });
    };
    RoomController.prototype.updateRoom = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, roomUpdate, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, RoomModel_1.Room.findByIdAndUpdate(id, req.body)];
                    case 2:
                        roomUpdate = _a.sent();
                        res.status(200).json({ roomUpdate: roomUpdate });
                        return [3, 4];
                    case 3:
                        error_4 = _a.sent();
                        return [2, next(error_4.message)];
                    case 4: return [2];
                }
            });
        });
    };
    RoomController.prototype.deleteRoom = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, roomDelete, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, RoomModel_1.Room.findByIdAndRemove(id)];
                    case 2:
                        roomDelete = _a.sent();
                        return [2, res.status(204).json({ roomDelete: roomDelete })];
                    case 3:
                        error_5 = _a.sent();
                        return [2, next(error_5.message)];
                    case 4: return [2];
                }
            });
        });
    };
    return RoomController;
}());
exports.RoomController = RoomController;
