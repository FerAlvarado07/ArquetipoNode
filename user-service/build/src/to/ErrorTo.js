"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorTo = void 0;
/**
 * @export
 * @class ErrorTO
 *
 * @swagger
 * components:
 *  schemas:
 *    ErrorTo:
 *      type: object
 *      properties:
 *        errorCode:
 *          type: string
 *          description: Código de error de negocio
 *          example: 10
 *        errorMessage:
 *          type: string
 *          description: Error de sistema
 *          example: Null pointer
 *        userError:
 *          type: string
 *          description: Human readable error
 *          example: No se encontró información
 *        info:
 *          type: string
 *          description: Información sobre solución del error
 *          example: http://info.com
 */
class ErrorTo {
    constructor(errorCode, errorMessage, userError, info) {
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
        this.userError = userError;
        this.info = info;
    }
}
exports.ErrorTo = ErrorTo;
//# sourceMappingURL=ErrorTo.js.map