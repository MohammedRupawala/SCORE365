import { NextFunction, Request, Response } from "express";
import errorHandler from "../utils/utilClass.js";
import { controllerTye } from "../types/types.js";

export const  errorHandlerMiddleware = (
    error:errorHandler,
    req:Request,
    res:Response,
    next:NextFunction)=>{
        error.message = error.message ||  "There is An Unexpected Error"
        error.statusCode = error.statusCode || 400

        if (res.headersSent) {
            return next(error); // Pass the error to the next error-handling middleware
        }
          res.status(error.statusCode).json({
            success:false,
            message : error.message
        })
}

export const TryCatch = (func : controllerTye)  => (req : Request,res : Response, next:NextFunction)=>{
    return Promise.resolve(func(req, res, next)).catch(next);
}
