import {ConsumerCard} from "../entities/consumer-card.entity";
import {PartialType} from "@nestjs/mapped-types";

export class CreateDto extends PartialType(ConsumerCard){}
