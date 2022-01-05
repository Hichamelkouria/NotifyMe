"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSubscriber = void 0;
const typeorm_1 = require("typeorm");
const message_entity_1 = require("../messages/message.entity");
const message_gateway_1 = require("../messages/message.gateway");
let NotificationSubscriber = class NotificationSubscriber {
    constructor(connection, messageGateway) {
        this.messageGateway = messageGateway;
        console.log('SUBSCRIBING : messages');
        connection.subscribers.push(this);
    }
    listenTo() {
        return message_entity_1.Message;
    }
    beforeInsert(event) {
        console.log(`BEFORE MESSAGE INSERTED: `, event.entity);
    }
    afterInsert(event) {
        console.log(`after MESSAGE INSERTED: `, event.entity.id);
        this.messageGateway.handleCreatedMessage(event.entity);
    }
};
NotificationSubscriber = __decorate([
    (0, typeorm_1.EventSubscriber)(),
    __metadata("design:paramtypes", [typeorm_1.Connection,
        message_gateway_1.default])
], NotificationSubscriber);
exports.NotificationSubscriber = NotificationSubscriber;
//# sourceMappingURL=message.subscriber.js.map