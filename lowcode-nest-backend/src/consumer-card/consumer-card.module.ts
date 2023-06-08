import {forwardRef, Module} from '@nestjs/common';
import { ConsumerCardService } from './consumer-card.service';
import { ConsumerCardController } from './consumer-card.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConsumerCard } from "./entities/consumer-card.entity";

@Module({
  controllers: [ConsumerCardController],
  imports: [TypeOrmModule.forFeature([ConsumerCard]),],
  providers: [ConsumerCardService],
  exports: [ConsumerCardService]
})
export class ConsumerCardModule {}
