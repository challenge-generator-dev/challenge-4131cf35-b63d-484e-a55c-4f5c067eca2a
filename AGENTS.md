# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Exposición del catálogo de productos a través de endpoints REST**.

| | |
|---|---|
| Tema | Construccion de APIs REST con Express |
| Nivel | advanced-l2 |
| Chapter | Backend |
| Especialidad | Node |
| Stack | TypeScript / Express 4.21 |
| Patron arquitectonico | capas estándar (ruta → controlador → servicio → repositorio) |
| Tiempo estimado | 8 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json y tsconfig.json en la raiz`
- `src/main.ts como bootstrap`
- `src/domain con entidades y puertos`
- `src/application con casos de uso`
- `src/infrastructure con repositorios y controller`
- `Express como framework (vinculante: no mezcles otro framework del mismo ecosistema)`

Trampas conocidas:

- No inventes versiones de npm. Usa rango con caret (`^5.7.2`) sobre una version que exista, o deja que el paquete la resuelva. Una version inexistente (ej. `@types/react-router-dom@6.19.0`) hace fallar `npm install` con ETARGET y el proyecto no instala.
- Los paquetes `@types/*` solo hacen falta para librerias que no traen sus propios tipos. React Router, NestJS y Prisma ya los traen: agregar `@types/` de esos rompe o sobra.
- El `tsconfig.json` es obligatorio: sin el, `tsc` no sabe que compilar.

Dependencias:

- @types/uuid 11.0.0
- express 4.22.3
- ts-node 10.9.2
- zod 3.25.76
- @types/express 4.17.25
- @types/node 22.20.5
- typescript 5.7.3
- jest 29.7.0
- ts-jest 29.2.5
- @types/jest 29.5.14

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install --no-audit --no-fund && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install --no-audit --no-fund && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Definición y validación de endpoints**: Endpoints REST definidos y validados para listar y obtener productos.
- **Fase 2 — Manejo de errores y pruebas de aceptación**: Endpoints REST con manejo centralizado de errores y pruebas de aceptación realizadas.
- **Fase 3 — Optimización y refactorización**: Código optimizado y refactorizado para los endpoints REST.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Superficie de practica (NO completes)

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs. No toques la logica que el reto pide completar.

- [ ] `src/application/services/ProductService.ts` — La pieza p1 (Definición de servicio para listar productos, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/infrastructure/middlewares/ErrorHandler.ts` — La pieza p3 (Manejo centralizado de errores, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/infrastructure/controllers/ProductController.ts` — absorbida: fuga de la pieza p1
- [ ] `src/infrastructure/middlewares/ValidationMiddleware.ts` — absorbida: fuga de la pieza p3

## Mapa de fases

La **Fase 0** es clonar el repositorio, instalar dependencias y correr las pruebas de aceptacion: todas fallan porque la logica de cada pieza esta pendiente.

| Fase | Pieza (skill) | Archivo:simbolo | Criterios | Prueba | Comando |
|------|---------------|-----------------|-----------|--------|---------|
| f1 — Definición y validación de endpoints | Definición de servicio para listar productos | `src/application/services/ProductService.ts:ProductService.listProducts` | Los endpoints REST para listar y obtener productos están definidos y validados. | — | — |
| f1 — Definición y validación de endpoints | Definición de servicio para obtener un producto | `src/application/services/ProductService.ts:ProductService.getProduct` | Los endpoints REST para listar y obtener productos están definidos y validados. | — | — |
| f2 — Manejo de errores y pruebas de aceptación | Manejo centralizado de errores | `src/infrastructure/middlewares/ErrorHandler.ts:ErrorHandler.handleError` | Los endpoints REST tienen manejo centralizado de errores.; Las pruebas de aceptación cubren los casos de error 400 y 404. | — | — |
| f2 — Manejo de errores y pruebas de aceptación | Pruebas de aceptación para endpoints de productos | — | Los endpoints REST tienen manejo centralizado de errores.; Las pruebas de aceptación cubren los casos de error 400 y 404. | — | — |
| f3 — Optimización y refactorización | Optimización y refactorización del código | `src/application/services/ProductService.ts:ProductService.optimize` | El código de los endpoints REST ha sido optimizado y refactorizado. | — | — |

## Pruebas de aceptacion y ubicacion de la logica

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

La logica de cada pieza va en su archivo; no la muevas a otro.

## Restricciones del pedido

| Restriccion | Donde se cumple | Estado |
|-------------|-----------------|--------|
| Validar el body de las requests con Zod 3 (dependencia zod en package.json) | chequeo estatico (code): exige `zod`, `import { z } from 'zod';` | Verificada |
| No usar Mongoose ni MongoDB; los datos viven en memoria detras de un repositorio | chequeo estatico (code): exige `in-memory`, `repository`; prohibe `mongoose`, `MongoDB` | Restriccion no verificada en chequeo estatico (code): exige `in-memory`, `repository`; prohibe `mongoose`, `MongoDB` |
| Las pruebas de aceptacion con Jest cubren los casos de error 400 y 404 | chequeo estatico (tests): exige `expect(response.status).toBe(400)`, `expect(response.status).toBe(404)` | Restriccion no verificada en chequeo estatico (tests): exige `expect(response.status).toBe(400)`, `expect(response.status).toBe(404)` |

## Lo que falta y tenes que completar

### 1. Archivos que la arquitectura declara (2 de 13)

La propuesta arquitectonica del reto los lista y no llegaron al repo. Crealos con implementacion real, respetando la capa en la que viven:

- [ ] `src/acceptance/f1.test.ts`
- [ ] `src/acceptance/f3.test.ts`

### Presentes (13)

- `package.json`
- `tsconfig.json`
- `src/domain/models/Product.ts`
- `src/domain/ports/ProductRepository.ts`
- `src/infrastructure/repositories/InMemoryProductRepository.ts`
- `src/infrastructure/controllers/ProductController.ts`
- `src/application/services/ProductService.ts`
- `src/infrastructure/middlewares/ErrorHandler.ts`
- `src/test/productEndpoints.spec.ts`
- `src/infrastructure/schemas/ProductSchema.ts`
- `src/infrastructure/middlewares/ValidationMiddleware.ts`
- `src/main.ts`
- `src/app.ts`

### Capas del patron declarado

Son las capas que la propuesta arquitectonica plantea, marcadas segun existan hoy en el repo. Orientan donde poner el codigo nuevo; no son una condicion para compilar.

- `src/domain/models` (presente)
- `src/domain/ports` (presente)
- `src/application/services` (presente)
- `src/infrastructure/repositories` (presente)
- `src/infrastructure/controllers` (presente)
- `src/infrastructure/middlewares` (presente)
- `src/infrastructure/schemas` (presente)
- `test` (ausente)

## Verificacion

```bash
npm install --no-audit --no-fund && npm run build
```

El comando tiene que pasar SIN implementar los archivos de la superficie de practica: solo andamiaje.

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **capas estándar (ruta → controlador → servicio → repositorio)**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Backend, Especialidad Desarrollador, Tecnología Node, Advanced L2
- Brecha que el reto ataca: Construir endpoints REST con validacion y manejo de errores
- Mision: Exponer el catalogo de productos

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
