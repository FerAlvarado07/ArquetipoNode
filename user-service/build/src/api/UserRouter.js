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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const facade_1 = require("../facade");
const logger_1 = require("../config/logger/logger");
/**
 * @constant {express.Router}
 */
const router = (0, express_1.Router)();
/**
 * GET method route
 * @example http://localhost:PORT/users
 * @swagger
 * /users/:
 *  get:
 *    description: Get all Users
 *    tags: ["Users"]
 *    responses:
 *      200:
 *        description: All Users
 *        content:
 *          appication/json:
 *            schema:
 *              $ref: '#/components/schemas/UserTO'
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 * components:
 *   schemas:
 *     UserTO:
 *       type: object
 *       properties:
 *         name:
 *              type: string
 *              example: rjaforever
 *         email:
 *              type: string
 *              example: rjaforever@gmail.com
 *              message: Users
 */
router.get("", facade_1.UserFacade.findAll);
/**
 * POST method route
 * @example http://localhost:PORT/users
 * @swagger
 * /users/:
 *  post:
 *    description: create user
 *    tags: ["Users"]
 *    requestBody:
 *      description: object user
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UserTO'
 *    responses:
 *      200:
 *        description: All Users
 *        content:
 *          appication/json:
 *            example:
 *              status: 200
 *              message: ok
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 * components:
 *   schemas:
 *     UserTO:
 *       type: object
 *       properties:
 *         name:
 *              type: string
 *              example: Fernando
 *         email:
 *              type: string
 *              example: fealvarado.alvarado@axity.com
 *              message: Users
 */
router.post("", facade_1.UserFacade.create);
/**
 * PUT method route
 * @example http://localhost:PORT/users
 * @swagger
 * /users/:
 *  put:
 *    description: Update User
 *    tags: ["Users"]
 *    requestBody:
 *      description: object user
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UserTO'
 *    responses:
 *      200:
 *        description: All Users
 *        content:
 *          appication/json:
 *            example:
 *              status: 200
 *              message: ok
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 * components:
 *   schemas:
 *     UserTO:
 *       type: object
 *       properties:
 *         name:
 *              type: string
 *              example: Fernando
 *         email:
 *              type: string
 *              example: fealvarado.alvarado@axity.com
 *              message: Users
 */
router.put("", facade_1.UserFacade.update);
/**
 * DELETE method route
 * @example http://localhost:PORT/users/{id}
 * @swagger
 * /users/:
 *  delete:
 *    description: delete user
 *    tags: ["Users"]
 *    requestBody:
 *      description: object user
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UserTO'
 *    responses:
 *      200:
 *        description: All Users
 *        content:
 *          appication/json:
 *            example:
 *              status: 200
 *              message: ok
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 * components:
 *   schemas:
 *     UserTO:
 *       type: object
 *       properties:
 *         name:
 *              type: string
 *              example: Fernando
 *         email:
 *              type: string
 *              example: fealvarado.alvarado@axity.com
 *              message: Users
 */
router.delete("", facade_1.UserFacade.deleteUser);
/**
 * GET method route
 * @example http://localhost:PORT/ping
 * @swagger
 * /ping/:
 *  get:
 *    description: Test service
 *    tags: ["Ping"]
 *    responses:
 *      200:
 *        description: Pong
 *        content:
 *          appication/json:
 *            example:
 *              status: 200
 *              message: pong
 */
router.get("/ping", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    logger_1.logger.info("(%s) - Request accepted: %s", "UserRouter.ts", "");
    res.send("pong");
    logger_1.logger.info("(%s) - Sending Response: %s", "UserRouter.ts", { data: "pong" });
}));
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=UserRouter.js.map