import { EmailTemplate } from '../email.types';

export class SendEmailDto {
  emailTemplate: EmailTemplate;
  recipient: string;
  data: Record<string, string>;
}
