import {Column, Entity, ManyToOne, OneToMany} from "typeorm";
import { BaseEntity } from "../../common/entities/base-entity";




@Entity()
export class FileUpload extends BaseEntity{


  @Column()
  price: number

  @Column({default: 0})
  isBeenBuy: number

  @Column({default: 0})
  isUsed: number




}


