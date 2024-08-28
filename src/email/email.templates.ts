import { ConfirmRegistrationTemplateArgs, EmailTemplate } from './email.types';

const getConfirmRegistrationTemplate = (
  args: ConfirmRegistrationTemplateArgs,
) => ({
  to: args.recipient,
  subject: 'Welcome to FastAI! Confirm your Email',
  template: './confirm-registration',
  context: {
    name: args.context.recipientName,
    url: `example.com/auth/confirm?token=${args.context.confirmToken}`,
  },
});

const emailTemplateMapper = {
  [EmailTemplate.ConfirmRegistration]: getConfirmRegistrationTemplate,
};

export { emailTemplateMapper };
