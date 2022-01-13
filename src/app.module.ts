import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ServiceModule } from "./service/service.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection } from "typeorm";

@Module({
  imports: [TypeOrmModule.forRoot(), ServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
