// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Request, Response, NextFunction } from 'express';

export class ErrorHandler {
  handleError(error: Error): Response {
    throw new Error('TODO(reto): handleError');
  }

  static errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction): void {
    const message = err.message;
    
    if (message.includes('no encontrado') || message.includes('not found')) {
      res.status(404).json({ error: message });
      return;
    }
    
    if (message.includes('validación') || message.includes('validation') || message.includes('required')) {
      res.status(400).json({ error: message });
      return;
    }

    res.status(500).json({ error: 'Error interno del servidor' });
  }
}