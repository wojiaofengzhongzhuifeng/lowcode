import {FileUpload} from "../entities/file-upload.entity";
import {PartialType} from "@nestjs/mapped-types";

export class CreateDto extends PartialType(FileUpload){}
