import { Router } from "express";
import { UserFacade } from "../facade";
import { logger } from "../config/logger/logger";

/**
 * @constant {express.Router}
 */
const router: Router = Router();

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
router.get("", UserFacade.findAll);

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

router.post("", UserFacade.create);
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
router.put("", UserFacade.update);

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
router.delete("", UserFacade.deleteUser);

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
router.get("/ping", async (req, res) => {
  logger.info("(%s) - Request accepted: %s", "UserRouter.ts", "");
  res.send("pong");
  logger.info("(%s) - Sending Response: %s", "UserRouter.ts", { data: "pong" });
});

/**
 * @export {express.Router}
 */
export default router;
