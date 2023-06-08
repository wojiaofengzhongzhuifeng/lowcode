import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes, HttpCode, Query, Patch, Param, UseInterceptors, UploadedFile,
} from "@nestjs/common";
import { FileUploadService } from './file-upload.service';
import { CreateDto } from './dto/create.dto';
import { ValidationPipe } from './pipe/validation.pipe';
import { TransformPipe } from "./pipe/transform.pipe";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('fileUpload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @UsePipes(
    ValidationPipe,
    TransformPipe,
    // TODO 这里可以添加权限校验
  )
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log('file', file);
    this.fileUploadService.resolveExcel(file)
  }

  @Get()
  findById(@Query('id') id){
    return "jfdklsjfkldsa"
    // return this.fileUploadService.findById(id)
  }

  @Patch()
  updateById(
    @Query('id') id,
    @Body() body: any,
  ){
    return this.fileUploadService.updateById(id, body)
  }


}
