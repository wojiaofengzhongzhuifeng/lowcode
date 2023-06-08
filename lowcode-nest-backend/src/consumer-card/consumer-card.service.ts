import {forwardRef, Get, Inject, Injectable, Param} from "@nestjs/common";
import { CreateDto } from "./dto/create.dto";
import { UpdateDto } from "./dto/update.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConsumerCard } from "./entities/consumer-card.entity";
import { baseResponse, BaseResponse, Result } from "../common/entities/common-response";
import {computedResp, getDate, isEmpty} from "../common/utils";
import {IntervalException, RequestDataException} from "../common/custom-http-exception";

@Injectable()
export class ConsumerCardService {


  constructor(
    @InjectRepository(ConsumerCard)
    private readonly consumerCardRepository: Repository<ConsumerCard>,
  ) {}

  async create(createDto: CreateDto): Promise<BaseResponse<ConsumerCard>> {
    const {price} = createDto

    const consumerCard1 = this.consumerCardRepository.create({price, ...getDate()})
    const sqlResult =  await this.consumerCardRepository.save(consumerCard1)
    return computedResp(sqlResult)


  }




  async findById(id: number) {




    // const sqlResult =  await this.consumerCardRepository
    //   .createQueryBuilder('consumerCard')
    //   .innerJoin(Teacher, 'teacher', 'consumerCard.id = teacher.consumerCardId')
    //   .select([ 'teacher.name'])
    //   .where('consumerCard.id = :id', {id})
    //   .getOne()

    // const sqlResult =  await this.consumerCardRepository
    //   .createQueryBuilder('consumerCard')
    //   .innerJoin(Teacher, 'teacher1', 'consumerCard.id = teacher1.consumerCardId')
    //   .select([ 'teacher1.name', 'teacher1.creation'])
    //   .where('consumerCard.id = :id', {id})
    //   .getOne()
    // const sqlResult =  await this.consumerCardRepository
    //   .createQueryBuilder()
    //   .where("id = :id", {id})
    //   .getOne()
    // todo 目前使用 createQueryBuilder 查询，无法查询结果，不知道原因是什么
    const query = 'select consumerCard.name as consumerCardName, consumerCard.description as consumerCardDesc,teacher.name as teacherName from consumerCard LEFT JOIN teacher on consumerCard.id = teacher.consumerCardId WHERE consumerCard.id = ?';
    const params = [id];
    const sqlResult: ConsumerCard[] = await this.consumerCardRepository.query(query, params);
    console.log('sqlResult', sqlResult, id);
    if(sqlResult.length === 1){
      return computedResp(sqlResult)
    } else {
      throw new IntervalException('数据id 重复')
    }


    // const user = await this.consumerCardRepository.createQueryBuilder("consumerCard")
    //   .leftJoinAndSelect("consumerCard.teachers", "teacher")
    //   .select(['teacher.name']) // added selection
    //   .where("consumerCard.id = 1", )
    //   .getOne();
    //
    // console.log('user', user);


    // TODO 在 controller 对响应数据做转化
    return true
  }

  async updateById(id: number, updateDto: UpdateDto) {
    console.log('updateDto', updateDto, id);
    const sqlResult = await this.consumerCardRepository
      .createQueryBuilder()
      .update(ConsumerCard)
      .set(updateDto)
      .where("id = :id", {id})
      .execute()

    if(sqlResult.affected === 1){
      return computedResp("ok")
    } else {
      throw new IntervalException("数据库更新失败")
    }


  }


}
