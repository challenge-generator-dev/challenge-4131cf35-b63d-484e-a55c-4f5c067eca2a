import { Product, ProductModel } from '../../domain/models/Product';
import { ProductRepository } from '../../domain/ports/ProductRepository';

/**
 * In-memory implementation of ProductRepository
 * Data persists only during the application lifetime
 */
export class InMemoryProductRepository implements ProductRepository {
  private products: Map<string, ProductModel> = new Map();

  async findAll(): Promise<Product[]> {
    return Array.from(this.products.values()).map(product => product.toJSON());
  }

  async findById(id: string): Promise<Product | null> {
    const product = this.products.get(id);
    return product ? product.toJSON() : null;
  }

  async save(product: ProductModel): Promise<Product> {
    this.products.set(product.id, product);
    return product.toJSON();
  }

  async delete(id: string): Promise<void> {
    this.products.delete(id);
  }

  // Método adicional para pruebas y setup inicial
  async seed(products: ProductModel[]): Promise<void> {
    products.forEach(product => {
      this.products.set(product.id, product);
    });
  }
}