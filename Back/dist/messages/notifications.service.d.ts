import { Repository } from 'typeorm';
import { Message } from './notification.entity';
import { CreateMessageDto } from 'src/dto/create-message.dto';
export declare class MessagesService {
    private messagesRepository;
    constructor(messagesRepository: Repository<Message>);
    create(CreateMessageDto: CreateMessageDto): Promise<Message>;
    findAll(): Promise<Message[]>;
    findOne(id: string): Promise<Message>;
    remove(id: string): Promise<void>;
}
