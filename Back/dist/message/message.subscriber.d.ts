import { Connection, EntitySubscriberInterface, InsertEvent } from 'typeorm';
import { Message } from '../messages/message.entity';
import MessageGateway from '../messages/message.gateway';
export declare class MessageSubscriber implements EntitySubscriberInterface<Message> {
    private readonly messageGateway;
    constructor(connection: Connection, messageGateway: MessageGateway);
    listenTo(): typeof Message;
    beforeInsert(event: InsertEvent<Message>): void;
    afterInsert(event: InsertEvent<Message>): void;
}
