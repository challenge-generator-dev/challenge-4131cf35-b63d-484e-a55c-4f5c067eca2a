import { z } from 'zod';

export const ProductRequestSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido').max(100, 'El nombre no puede exceder 100 caracteres'),
  description: z.string().max(500, 'La descripción no puede exceder 500 caracteres').optional(),
  price: z.number().positive('El precio debe ser positivo'),
  stock: z.number().int().nonnegative('El stock debe ser un número entero no negativo')
});

export const ProductUpdateSchema = ProductRequestSchema.partial();

export const ProductIdParamSchema = z.object({
  id: z.string().uuid('El ID debe ser un UUID válido')
});

export type ProductRequest = z.infer<typeof ProductRequestSchema>;
export type ProductUpdate = z.infer<typeof ProductUpdateSchema>;
export type ProductIdParam = z.infer<typeof ProductIdParamSchema>;

export function validateProductRequest(data: unknown): ProductRequest {
  return ProductRequestSchema.parse(data);
}

export function validateProductUpdate(data: unknown): ProductUpdate {
  return ProductUpdateSchema.parse(data);
}

export function validateProductIdParam(data: unknown): ProductIdParam {
  return ProductIdParamSchema.parse(data);
}