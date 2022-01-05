import { Message } from './notification.entity';
import { MessagesService } from './notifications.service';
import { CreateMessageDto } from 'src/dto/create-message.dto';
import MessageGateway from './message.gateway';
export declare class MessagesController {
    private readonly messagesService;
    private readonly messageGateway;
    constructor(messagesService: MessagesService, messageGateway: MessageGateway);
    create(createMessageDto: CreateMessageDto): Promise<Message>;
    findAll(): Promise<Message[]>;
    findOne(id: string): Promise<Message>;
    remove(id: string): Promise<void>;
}
