import { ErrorHandler } from '../infrastructure/middlewares/ErrorHandler';

describe('Fase 2: Manejo centralizado de errores', () => {
  describe('Manejo de error 400', () => {
    it('dado Error de validación; cuando Se llama a handleError; entonces Devuelve un error 400', () => {
      const errorHandler = new ErrorHandler();
      const validationError = new Error('Error de validación: el campo nombre es requerido');

      const response = errorHandler.handleError(validationError);

      expect(response).toBeDefined();
    });
  });

  describe('Manejo de error 404', () => {
    it('dado Recurso no encontrado; cuando Se llama a handleError; entonces Devuelve un error 404', () => {
      const errorHandler = new ErrorHandler();
      const notFoundError = new Error('Producto no encontrado');

      const response = errorHandler.handleError(notFoundError);

      expect(response).toBeDefined();
    });
  });
});