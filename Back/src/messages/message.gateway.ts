import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { CreateMessageDto } from '../dto/create-message.dto';

@WebSocketGateway(82)
export default class MessageGateway {
  @WebSocketServer()
  server;

  @SubscribeMessage('read')
  handleReadnotification(@MessageBody() string: boolean): void {
    console.log(' change the message status ');
  }

  handleCreatedMessage(notification: CreateMessageDto): void {
    this.server.emit('notification', notification);
  }
}
