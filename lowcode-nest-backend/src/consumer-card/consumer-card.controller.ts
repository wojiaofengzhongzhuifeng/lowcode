import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes, HttpCode, Query, Patch, Param,
} from "@nestjs/common";
import { ConsumerCardService } from './consumer-card.service';
import { CreateDto } from './dto/create.dto';
import { ValidationPipe } from './pipe/validation.pipe';
import { TransformPipe } from "./pipe/transform.pipe";

@Controller('consumerCard')
export class ConsumerCardController {
  constructor(private readonly consumerCardService: ConsumerCardService) {}

  @UsePipes(
    ValidationPipe,
    TransformPipe,
    // TODO 这里可以添加权限校验
  )
  @Post()
  @HttpCode(200)
  create(@Body() createDto: CreateDto) {
    return this.consumerCardService.create(createDto);
  }


  @Get()
  findById(@Query('id') id){
    return this.consumerCardService.findById(id)
  }

  @Patch()
  updateById(
    @Query('id') id,
    @Body() body: any,
  ){
    return this.consumerCardService.updateById(id, body)
  }


}
