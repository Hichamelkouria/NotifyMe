import { Connection, EntitySubscriberInterface, InsertEvent } from 'typeorm';
import { User } from './user.entity';
export declare class UserSubscriber implements EntitySubscriberInterface<User> {
    constructor(connection: Connection);
    listenTo(): any;
    beforeInsert(event: InsertEvent<User>): void;
}
