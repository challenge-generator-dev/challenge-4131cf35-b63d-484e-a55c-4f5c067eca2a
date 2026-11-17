# Exposición del catálogo de productos a través de endpoints REST

El sistema debe exponer un catálogo de productos a través de endpoints REST. Los productos tienen un identificador único, nombre, descripción, precio y stock. El sistema debe validar las entradas y manejar los errores de manera centralizada. Los datos se almacenan en memoria detrás de un repositorio.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Construccion de APIs REST con Express |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Stack

- **Lenguaje:** TypeScript
- **Framework:** Express 4.21
- **Version:** Node 22

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Tener el proyecto base del reto funcionando en tu máquina: clonar el repositorio, instalar las herramientas y verificar que compila y arranca antes de empezar a practicar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Instala las herramientas para ejecutar el proyecto: Node.js 18+ y npm.
- Clona el repositorio del reto (el enlace viene en la entrega del reto y en la sección "Repositorio del Proyecto" del PDF) y ábrelo en tu IDE.
- Instala las dependencias y compila ejecutando `npm install --no-audit --no-fund && npm run build` en la raíz del repositorio.
- Confirma que el comando termina sin errores: el proyecto arranca y sus pruebas corren.
- Ubica los archivos de práctica: son los que contienen `TODO(reto)` (búscalos en el repositorio). Lee el README.md y el AGENTS.md antes de empezar.

**Entregable:** El proyecto compila/arranca sin errores con `npm install --no-audit --no-fund && npm run build`.

<details>
<summary>Pistas de conocimiento</summary>

- Los archivos con `TODO(reto)` son el ejercicio: el resto del repositorio ya está resuelto y no hace falta tocarlo.
- Si el comando de verificación falla, revisa la versión de las herramientas instaladas antes de modificar código.
- AGENTS.md describe el reto, el comando de verificación y las reglas del repositorio.

</details>

### Fase 1: Definición y validación de endpoints

**Objetivo:** Definir y validar los endpoints REST para el catálogo de productos.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Crear los endpoints REST para listar y obtener un producto por su identificador.
- Validar el body de las requests utilizando Zod 3.
- Manejar los errores de validación y devolver un código de estado 400.

**Entregable:** Endpoints REST definidos y validados para listar y obtener productos.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda que los datos se almacenan en memoria detrás de un repositorio.
- Utiliza Zod 3 para la validación de las requests.

</details>

### Fase 2: Manejo de errores y pruebas de aceptación

**Objetivo:** Implementar el manejo centralizado de errores y realizar pruebas de aceptación.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementar el manejo centralizado de errores en los endpoints REST.
- Realizar pruebas de aceptación con Jest para cubrir los casos de error 400 y 404.
- Asegurar que los endpoints devuelven los códigos de estado correctos en caso de error.

**Entregable:** Endpoints REST con manejo centralizado de errores y pruebas de aceptación realizadas.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda que no debes utilizar Mongoose ni MongoDB.
- Utiliza Jest para realizar las pruebas de aceptación.

</details>

### Fase 3: Optimización y refactorización

**Objetivo:** Optimizar y refactorizar el código para mejorar la legibilidad y mantenibilidad.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Refactorizar el código de los endpoints para mejorar la legibilidad y mantenibilidad.
- Asegurarse de que las pruebas de aceptación sigan pasando después de la refactorización.

**Entregable:** Código optimizado y refactorizado para los endpoints REST.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda seguir buenas prácticas y patrones de diseño al refactorizar el código.
- Utiliza herramientas de linting y formateo para mejorar la legibilidad del código.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los endpoints REST y cómo se utilizan en este reto?
- **paraQueSirve**: ¿Para qué sirven los endpoints REST en este reto y cómo contribuyen a la exposición del catálogo de productos?
- **comoSeUsa**: ¿Cómo se utilizan Zod 3 y Jest en este reto para validar las requests y realizar pruebas de aceptación?
- **erroresComunes**: ¿Qué errores comunes pueden ocurrir al definir y validar los endpoints REST y cómo se manejan en este reto?
- **queDecisionesImplica**: ¿Qué decisiones implica la refactorización del código en este reto y cómo se asegura que los endpoints siguen funcionando correctamente?

## Criterios de Evaluacion

- Definición y validación de endpoints REST para el catálogo de productos.
- Manejo centralizado de errores en los endpoints REST.
- Realización de pruebas de aceptación con Jest para cubrir los casos de error 400 y 404.
- Optimización y refactorización del código para mejorar la legibilidad y mantenibilidad.

## Mapa de fases

La **Fase 0** es clonar el repositorio, instalar dependencias y correr las pruebas de aceptacion: todas fallan porque la logica de cada pieza esta pendiente.

| Fase | Pieza (skill) | Archivo:simbolo | Criterios | Prueba | Comando |
|------|---------------|-----------------|-----------|--------|---------|
| f1 — Definición y validación de endpoints | Definición de servicio para listar productos | `src/application/services/ProductService.ts:ProductService.listProducts` | Los endpoints REST para listar y obtener productos están definidos y validados. | — | — |
| f1 — Definición y validación de endpoints | Definición de servicio para obtener un producto | `src/application/services/ProductService.ts:ProductService.getProduct` | Los endpoints REST para listar y obtener productos están definidos y validados. | — | — |
| f2 — Manejo de errores y pruebas de aceptación | Manejo centralizado de errores | `src/infrastructure/middlewares/ErrorHandler.ts:ErrorHandler.handleError` | Los endpoints REST tienen manejo centralizado de errores.; Las pruebas de aceptación cubren los casos de error 400 y 404. | — | — |
| f2 — Manejo de errores y pruebas de aceptación | Pruebas de aceptación para endpoints de productos | — | Los endpoints REST tienen manejo centralizado de errores.; Las pruebas de aceptación cubren los casos de error 400 y 404. | — | — |
| f3 — Optimización y refactorización | Optimización y refactorización del código | `src/application/services/ProductService.ts:ProductService.optimize` | El código de los endpoints REST ha sido optimizado y refactorizado. | — | — |

## Pruebas de aceptacion

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

## Restricciones del pedido

| Restriccion | Donde se cumple | Estado |
|-------------|-----------------|--------|
| Validar el body de las requests con Zod 3 (dependencia zod en package.json) | chequeo estatico (code): exige `zod`, `import { z } from 'zod';` | Verificada |
| No usar Mongoose ni MongoDB; los datos viven en memoria detras de un repositorio | chequeo estatico (code): exige `in-memory`, `repository`; prohibe `mongoose`, `MongoDB` | Restriccion no verificada en chequeo estatico (code): exige `in-memory`, `repository`; prohibe `mongoose`, `MongoDB` |
| Las pruebas de aceptacion con Jest cubren los casos de error 400 y 404 | chequeo estatico (tests): exige `expect(response.status).toBe(400)`, `expect(response.status).toBe(404)` | Restriccion no verificada en chequeo estatico (tests): exige `expect(response.status).toBe(400)`, `expect(response.status).toBe(404)` |

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install --no-audit --no-fund && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
