import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection } from "typeorm";
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, CommentsModule, ServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
