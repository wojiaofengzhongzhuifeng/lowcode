import {forwardRef, Module} from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileUploadController } from './file-upload.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { FileUpload } from "./entities/file-upload.entity";

@Module({
  controllers: [FileUploadController],
  imports: [TypeOrmModule.forFeature([FileUpload]),],
  providers: [FileUploadService],
  exports: [FileUploadService]
})
export class FileUploadModule {}
