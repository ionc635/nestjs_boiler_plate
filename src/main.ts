import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from 'src/util/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
