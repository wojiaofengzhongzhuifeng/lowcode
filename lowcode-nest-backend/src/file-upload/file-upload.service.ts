import {forwardRef, Get, Inject, Injectable, Param} from "@nestjs/common";
import { CreateDto } from "./dto/create.dto";
import { UpdateDto } from "./dto/update.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { FileUpload } from "./entities/file-upload.entity";
import { baseResponse, BaseResponse, Result } from "../common/entities/common-response";
import {computedResp, getDate, isEmpty} from "../common/utils";
import {IntervalException, RequestDataException} from "../common/custom-http-exception";

@Injectable()
export class FileUploadService {


  constructor(
    @InjectRepository(FileUpload)
    private readonly fileUploadRepository: Repository<FileUpload>,
  ) {}

  async resolveExcel(file: File): Promise<BaseResponse<FileUpload>> {

  }




}
