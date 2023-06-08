import {
  ArgumentMetadata,
  Injectable,
  PipeTransform
} from "@nestjs/common";

@Injectable()
export class TransformPipe implements PipeTransform<any> {
  async transform(value, metadata: ArgumentMetadata) {

    return {...value}

  }


}
