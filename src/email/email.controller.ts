import { Body, Controller, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { EmailService } from './email.service';
import { SendEmailDto } from './dto/send-email.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('api/email')
@ApiTags('Email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @MessagePattern('send')
  async send(sendEmailDto: SendEmailDto) {
    return this.emailService.send(sendEmailDto);
  }

  @Post('send')
  async sendRest(@Body() sendEmailDto: SendEmailDto) {
    return this.emailService.send(sendEmailDto);
  }
}
