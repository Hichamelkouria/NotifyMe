import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  allMessages(@Res() res: Response) {
    res.status(HttpStatus.OK).json({
      description: 'value',
      messages: [
        { id: 1, message: 'test 1' },
        { id: 2, message: 'test 2' },
        { id: 3, message: 'test 3' },
      ],
    });
  }
}
