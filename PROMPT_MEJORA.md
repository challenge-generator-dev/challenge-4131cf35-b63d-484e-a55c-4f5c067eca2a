# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `src/application/services/ProductService.ts` — La pieza p1 (Definición de servicio para listar productos, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/infrastructure/middlewares/ErrorHandler.ts` — La pieza p3 (Manejo centralizado de errores, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/infrastructure/controllers/ProductController.ts` — absorbida: fuga de la pieza p1
- `src/infrastructure/middlewares/ValidationMiddleware.ts` — absorbida: fuga de la pieza p3

## Lo que le falta a este proyecto

Esto NO lo tenes que adivinar: salio de comparar el proyecto contra la arquitectura declarada del reto y de un analisis estatico del codigo. Completalo TODO.

### Archivos que la arquitectura del reto declara y no estan

Creálos con implementacion real, en la capa que les corresponde:

- `src/acceptance/f1.test.ts`
- `src/acceptance/f3.test.ts`

## Como saber que terminaste

```bash
npm install --no-audit --no-fund && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Backend, Especialidad Desarrollador, Tecnología Node, Advanced L2

### Brecha de conocimiento
Construir endpoints REST con validacion y manejo de errores

### Misión / candidato
Exponer el catalogo de productos

### Reto
- Tema: Construccion de APIs REST con Express
- Seniority: advanced-l2
- Tipo: practical
- Título: Exposición del catálogo de productos a través de endpoints REST
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Definición y validación de endpoints — objetivo: Definir y validar los endpoints REST para el catálogo de productos. — entregable (NO resolver): Endpoints REST definidos y validados para listar y obtener productos.
- Fase 2: Manejo de errores y pruebas de aceptación — objetivo: Implementar el manejo centralizado de errores y realizar pruebas de aceptación. — entregable (NO resolver): Endpoints REST con manejo centralizado de errores y pruebas de aceptación realizadas.
- Fase 3: Optimización y refactorización — objetivo: Optimizar y refactorizar el código para mejorar la legibilidad y mantenibilidad. — entregable (NO resolver): Código optimizado y refactorizado para los endpoints REST.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "reto-express",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "test": "jest"
  },
  "dependencies": {
    "@types/uuid": "11.0.0",
    "express": "4.22.3",
    "ts-node": "10.9.2",
    "zod": "3.25.76"
  },
  "devDependencies": {
    "@types/express": "4.17.25",
    "@types/node": "22.20.5",
    "typescript": "5.7.3",
    "jest": "29.7.0",
    "ts-jest": "29.2.5",
    "@types/jest": "29.5.14"
  },
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node"
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "dist",
    "strict": true,
    "strictPropertyInitialization": false,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "types": [
      "node",
      "jest"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "test",
    "src/**/*.test.ts",
    "src/**/*.spec.ts"
  ]
}

// === ARCHIVO: src/domain/models/Product.ts ===
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

// === ARCHIVO: src/domain/ports/ProductRepository.ts ===
import { Product, ProductModel } from '../models/Product';

export interface ProductRepository {
  findAll(): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
  save(product: ProductModel): Promise<Product>;
  delete(id: string): Promise<void>;
}

// === ARCHIVO: src/infrastructure/repositories/InMemoryProductRepository.ts ===
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

// === ARCHIVO: src/infrastructure/controllers/ProductController.ts ===
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

// === ARCHIVO: src/application/services/ProductService.ts ===
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

// === ARCHIVO: src/infrastructure/middlewares/ErrorHandler.ts ===
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

// === ARCHIVO: src/test/productEndpoints.spec.ts ===
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

// === ARCHIVO: src/infrastructure/schemas/ProductSchema.ts ===
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

// === ARCHIVO: src/infrastructure/middlewares/ValidationMiddleware.ts ===
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

// === ARCHIVO: src/main.ts ===
import { app } from './app';
import { ErrorHandler } from './infrastructure/middlewares/ErrorHandler';

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Servidor arrancado en http://localhost:${PORT}`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM recibido, cerrando servidor...');
  server.close(() => {
    console.log('Servidor cerrado');
    process.exit(0);
  });
});

// === ARCHIVO: src/app.ts ===
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
```
