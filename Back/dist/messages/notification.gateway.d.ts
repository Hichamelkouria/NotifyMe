import { CreateMessageDto } from '../dto/create-message.dto';
export default class NotificationGateway {
    server: any;
    handleReadnotification(string: boolean): void;
    handleCreatedMessage(notification: CreateMessageDto): void;
}
