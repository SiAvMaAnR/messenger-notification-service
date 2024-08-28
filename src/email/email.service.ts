import { Injectable } from '@nestjs/common';
import { SendEmailDto } from './dto/send-email.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { emailTemplateMapper } from './email.templates';

@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}

  async send(sendEmailDto: SendEmailDto) {
    const { data, recipient, emailTemplate } = sendEmailDto;

    const template = emailTemplateMapper[emailTemplate]({
      recipient,
      context: {
        confirmToken: data.confirmToken,
        recipientName: data.recipientName,
      },
    });

    await this.mailerService.sendMail(template);
  }
}
