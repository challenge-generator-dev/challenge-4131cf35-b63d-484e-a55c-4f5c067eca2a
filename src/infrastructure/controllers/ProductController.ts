// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Request, Response, NextFunction } from 'express';
import { ProductService } from '../../application/services/ProductService';

export class ProductController {
  constructor(private readonly productService: ProductService) {}

  async listProducts(req: Request, res: Response, next: NextFunction): Promise<void> {
    throw new Error('TODO(reto): listProducts');
  }

  async getProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
    throw new Error('TODO(reto): getProduct');
  }
}