"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var database_1 = require("../database");
var DonacionesController = /** @class */ (function () {
    function DonacionesController() {
    }
    DonacionesController.listarDonaciones = function (listarDonaciones) {
        throw new Error("Method not implemented.");
    };
    DonacionesController.prototype.listarDonaciones = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var base, donaciones;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.con()];
                    case 1:
                        base = _a.sent();
                        return [4 /*yield*/, base.query('select * from donaciones')];
                    case 2:
                        donaciones = _a.sent();
                        return [2 /*return*/, res.json(donaciones)];
                }
            });
        });
    };
    //guardar formulario
    DonacionesController.prototype.guardarDonaciones = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var base, donaciones;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.con()];
                    case 1:
                        base = _a.sent();
                        donaciones = req.body;
                        return [4 /*yield*/, base.query("insert into donaciones set ?", [donaciones])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.json('Guardado con exito')];
                }
            });
        });
    };
    DonacionesController.prototype.eliminarDonaciones = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var db, id_donaciones;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.con()];
                    case 1:
                        db = _a.sent();
                        id_donaciones = req.params.id_donaciones;
                        return [4 /*yield*/, db.query('delete from donaciones where id_donaciones = ?', [id_donaciones])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.json('Se eliminada con exito')];
                }
            });
        });
    };
    DonacionesController.prototype.actualizarDonaciones = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var base, id_donaciones, nuevos_datos_donaciones;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.con()];
                    case 1:
                        base = _a.sent();
                        id_donaciones = req.params.id_donaciones;
                        nuevos_datos_donaciones = req.body;
                        return [4 /*yield*/, base.query("update donaciones set ? where id_donaciones = ?", [nuevos_datos_donaciones, id_donaciones])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.json('Se actualizo correctamente')];
                }
            });
        });
    };
    DonacionesController.prototype.obtenerDonaciones = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var base, id_donaciones, unDonaciones;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.con()];
                    case 1:
                        base = _a.sent();
                        id_donaciones = req.params.id_donaciones;
                        return [4 /*yield*/, base.query("select * from donaciones where id_donaciones = ?", [id_donaciones])];
                    case 2:
                        unDonaciones = _a.sent();
                        return [2 /*return*/, res.json(unDonaciones[0])];
                }
            });
        });
    };
    return DonacionesController;
}());
exports.DonacionesController = DonacionesController;
