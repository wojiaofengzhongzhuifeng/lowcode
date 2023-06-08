import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from "@nestjs/axios";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ScheduleModule as NestScheduleModule } from "@nestjs/schedule";
import {FileUploadModule} from "./file-upload/file-upload.module";


@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      // todo 环境变量
      password: 'raojiajun111',
      database: 'lowcode',
      autoLoadEntities: true,
      synchronize: true, // todo 生产环境设置为 false
      logging: true
    }),
    NestScheduleModule.forRoot(),
    FileUploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
