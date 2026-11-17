// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Request, Response, NextFunction, RequestHandler } from 'express';
import { ZodSchema, ZodError } from 'zod';
import { ErrorHandler } from './ErrorHandler';

export class ValidationMiddleware {
  static validate(schema: ZodSchema): RequestHandler {
    throw new Error('TODO(reto): validate');
  }

  static validateBody(schema: ZodSchema): RequestHandler {
    throw new Error('TODO(reto): validateBody');
  }

  static validateParams(schema: ZodSchema): RequestHandler {
    throw new Error('TODO(reto): validateParams');
  }

  static validateQuery(schema: ZodSchema): RequestHandler {
    throw new Error('TODO(reto): validateQuery');
  }
}