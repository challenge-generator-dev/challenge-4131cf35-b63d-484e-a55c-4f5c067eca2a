// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Product, ProductModel } from '../../domain/models/Product';
import { ProductRepository } from '../../domain/ports/ProductRepository';

export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async listProducts(): Promise<Product[]> {
    throw new Error('TODO(reto): listProducts');
  }

  async getProduct(id: string): Promise<Product> {
    throw new Error('TODO(reto): getProduct');
  }

  async optimize(): Promise<void> {
    throw new Error('TODO(reto): optimize');
  }
}