import {
  ArgumentMetadata,
  Injectable,
  PipeTransform
} from "@nestjs/common";

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value, metadata: ArgumentMetadata) {
    // const {info, goodTypeId} = value
    // if(!info){
    //   throw new RequestDataException('lack info');
    // }
    console.log('value pipe', value);
    return {...value}

  }
}
