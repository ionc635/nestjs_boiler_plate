import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceModule } from './service/service.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';

@Module({
  imports: [ServiceModule, TypeOrmModule.forRoot(configService.getTypeOrmConfig())],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
