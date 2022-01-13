import { Module } from "@nestjs/common";
import { ServiceController } from "./service.controller";
import { ServiceService } from "./service.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Service } from "./service.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Service])],
  controllers: [ServiceController],
  providers: [ServiceService],
})
export class ServiceModule {}
