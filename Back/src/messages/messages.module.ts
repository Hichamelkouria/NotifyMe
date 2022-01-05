import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MessagesController } from './messages.controller';
import { Message } from './message.entity';
import { MessagesService } from './messages.service';
import { MessageSubscriber } from 'src/message/message.subscriber';
import MessageGateway from './message.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  providers: [MessagesService, MessageSubscriber, MessageGateway],
  controllers: [MessagesController],
})
export class MessagesModule {}
