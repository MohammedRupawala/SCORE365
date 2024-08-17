import { NextFunction, Request, Response } from "express"

export type controllerTye = (
    req : Request,
    res : Response,
    next : NextFunction
) => Promise<void | Response<any, Record<string, any>>>;