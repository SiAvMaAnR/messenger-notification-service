import { Body, Controller, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { EmailService } from './email.service';
import { SendEmailDto } from './dto/send-email.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @MessagePattern('send')
  async createMessage(sendEmailDto: SendEmailDto) {
    return this.emailService.send(sendEmailDto);
  }

  @Post('send')
  async createMessageRest(@Body() sendEmailDto: SendEmailDto) {
    return this.emailService.send(sendEmailDto);
  }
}
