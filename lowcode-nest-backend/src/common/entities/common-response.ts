import { Column, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

export const codeMap = {
  '业务正常': 200,
  'goodType存在相同数据id': '00001',
  '购买good数量超出最大库存': '00002',
}


export enum Result{
  ok = 'ok',
  error = 'error'
}

export interface BaseResponse<T>{
  result: Result,
  data: T,
  message: string,
  code: number // 业务错误
}

export const baseResponse:BaseResponse<any> = {
  result: Result.ok,
  data: null,
  message: 'ok',
  code: codeMap.业务正常,
}
