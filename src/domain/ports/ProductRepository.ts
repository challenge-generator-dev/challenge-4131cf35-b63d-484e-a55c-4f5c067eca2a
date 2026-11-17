import { Product, ProductModel } from '../models/Product';

export interface ProductRepository {
  findAll(): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
  save(product: ProductModel): Promise<Product>;
  delete(id: string): Promise<void>;
}