import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(100),
  description: z.string().max(500),
  price: z.number().positive(),
  stock: z.number().int().nonnegative()
});

export type Product = z.infer<typeof ProductSchema>;

export class ProductModel {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
    public readonly price: number,
    public readonly stock: number
  ) {
    ProductSchema.parse({
      id,
      name,
      description,
      price,
      stock
    });
  }

  static create(data: Omit<Product, 'id'> & { id?: string }): ProductModel {
    const id = data.id || crypto.randomUUID();
    return new ProductModel(
      id,
      data.name,
      data.description,
      data.price,
      data.stock
    );
  }

  updateStock(newStock: number): ProductModel {
    return new ProductModel(
      this.id,
      this.name,
      this.description,
      this.price,
      newStock
    );
  }

  toJSON(): Product {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      stock: this.stock
    };
  }
}