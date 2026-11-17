import express, { Application, Request, Response, NextFunction } from 'express';
import { ProductController } from './infrastructure/controllers/ProductController';
import { ErrorHandler } from './infrastructure/middlewares/ErrorHandler';
import { ValidationMiddleware } from './infrastructure/middlewares/ValidationMiddleware';
import { InMemoryProductRepository } from './infrastructure/repositories/InMemoryProductRepository';
import { ProductService } from './application/services/ProductService';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productRepository = new InMemoryProductRepository();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

app.get('/products', ValidationMiddleware.validateQuery, (req: Request, res: Response, next: NextFunction) => 
  productController.listProducts(req, res, next));

app.get('/products/:id', ValidationMiddleware.validateParams, (req: Request, res: Response, next: NextFunction) => 
  productController.getProduct(req, res, next));

app.use(ErrorHandler.errorMiddleware);

export { app };