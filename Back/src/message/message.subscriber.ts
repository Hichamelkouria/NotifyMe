import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Message } from '../messages/message.entity';
import MessageGateway from '../messages/message.gateway';

@EventSubscriber()
export class MessageSubscriber implements EntitySubscriberInterface<Message> {
  constructor(
    connection: Connection,
    private readonly messageGateway: MessageGateway,
  ) {
    console.log('SUBSCRIBING : messages');
    connection.subscribers.push(this);
  }

  listenTo() {
    return Message;
  }

  beforeInsert(event: InsertEvent<Message>) {
    console.log(`BEFORE MESSAGE INSERTED: `, event.entity);
  }
  afterInsert(event: InsertEvent<Message>) {
    console.log(`after MESSAGE INSERTED: `, event.entity.id);
    this.messageGateway.handleCreatedMessage(event.entity);
  }
}
