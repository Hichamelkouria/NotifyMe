import { Message } from './message.entity';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from 'src/dto/create-message.dto';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    create(createMessageDto: CreateMessageDto): Promise<Message>;
    findAll(): Promise<Message[]>;
    findOne(id: string): Promise<Message>;
    remove(id: string): Promise<void>;
}
