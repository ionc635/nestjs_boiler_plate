import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );
  // whiteList -> 엔티티 데코레이터에 없는 프로퍼티 값은 무조건 걸러준다.
  // forbidNonWhitelisted -> 엔티티 데코레이터에 없는 값 삽입 시 그 값에 대한 에러메세지를 전달준다.
  // transform -> 컨트롤러가 값을 받을때 컨트롤러에 정의한 타입으로 형변환 해준다.
  await app.listen(3000);
}
bootstrap();
