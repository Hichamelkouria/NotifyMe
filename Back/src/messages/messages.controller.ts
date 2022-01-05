import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Message } from './message.entity';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from 'src/dto/create-message.dto';
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  create(@Body() createMessageDto: CreateMessageDto): Promise<Message> {
    return this.messagesService.create(createMessageDto);
  }

  @Get()
  findAll(): Promise<Message[]> {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Message> {
    return this.messagesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.messagesService.remove(id);
  }
}
