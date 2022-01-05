import { Connection, EntitySubscriberInterface, InsertEvent } from 'typeorm';
import { User } from '../users/user.entity';
export declare class UserSubscriber implements EntitySubscriberInterface<User> {
    constructor(connection: Connection);
    listenTo(): typeof User;
    beforeInsert(event: InsertEvent<User>): void;
}
