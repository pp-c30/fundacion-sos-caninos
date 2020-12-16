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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticacionController = void 0;
const database_1 = require("../database");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AutenticacionController {
    registrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcryptjs_1.default.genSalt(10);
            const password_cifrada = yield bcryptjs_1.default.hash(req.body.password, salt);
            const unUsuario = {
                username: req.body.username,
                password: password_cifrada,
                email: req.body.email
            };
            const db = yield database_1.con();
            const resultado = yield db.query('insert into usuario set ?', [unUsuario]);
            const token = jsonwebtoken_1.default.sign({ _id: resultado.insertId }, process.env.TOKEN_SECRET || '1f58hdgd');
            res.json(token);
        });
    }
    ingresar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.con();
            const usuario = yield db.query('select * from usuario where username = ?', [req.body.username]);
            if (!usuario[0]) {
                res.json(0);
            }
            else {
                const correctpassword = yield bcryptjs_1.default.compare(req.body.password, usuario[0].password);
                if (!correctpassword) {
                    res.json(1);
                }
                else {
                    const token = jsonwebtoken_1.default.sign({ _id: usuario[0].id_usuario }, process.env.TOKEN_SECRET || '1f58hdgd', { expiresIn: 60 * 60 * 24 });
                    res.json(token);
                }
            }
        });
    }
}
exports.AutenticacionController = AutenticacionController;
