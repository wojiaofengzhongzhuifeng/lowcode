import {ExceptionFilter, Catch, ArgumentsHost, HttpException} from '@nestjs/common';
import { Response } from 'express';
import {TypeORMError} from "typeorm";

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status: number
    // 根据 exception 错误类型
    if(exception instanceof HttpException){
      status = exception.getStatus();
    } else if (exception instanceof  TypeORMError){
      // TODO status 不一定是 500 ，有可能是 400 （客户端错误）
      status = 500
    }
    // TODO 未处理  status = 200 && code = xxx 的业务报错



    const message = exception.message;


    response.status(status).json({
      result: 'error',
      message,
      data: null,
      code: status
      // statusCode: status,
      // message,
      // timestamp: new Date().toISOString(),
      // path: ctx.getRequest().url,
    });
  }
}
