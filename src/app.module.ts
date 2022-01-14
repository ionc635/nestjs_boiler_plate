import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection } from "typeorm";
import { ConfigModule } from "@nestjs/config";
import { CommentModule } from "./comment/comment.module";
import { UserController } from "./user/user.controller";
import { UserModule } from "./user/user.module";
import { ServiceModule } from "./service/service.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot(),
    ServiceModule,
    CommentModule,
    UserModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
