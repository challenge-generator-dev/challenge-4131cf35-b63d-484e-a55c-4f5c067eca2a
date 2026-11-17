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