import { EmailTemplate, SendEmailTemplateArgs } from './email.types';

const getConfirmRegistrationTemplate = (args: SendEmailTemplateArgs) => ({
  to: args.recipient,
  subject: 'Confirm Your Email',
  template: './confirm-registration',
  context: {
    name: args.context.recipientName,
    link: args.context.confirmationLink,
  },
});

const getResetPasswordTemplate = (args: SendEmailTemplateArgs) => ({
  to: args.recipient,
  subject: 'Reset Your Password',
  template: './reset-password',
  context: {
    name: args.context.recipientName,
    link: args.context.resetPasswordLink,
  },
});

export const emailTemplateMapper = {
  [EmailTemplate.ConfirmRegistration]: getConfirmRegistrationTemplate,
  [EmailTemplate.ResetPassword]: getResetPasswordTemplate,
};
