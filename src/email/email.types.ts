export type SendEmailTemplateArgs = {
  recipient: string;
  context: Record<string, string>;
};

export enum EmailTemplate {
  ConfirmRegistration = 'confirm-registration',
  ResetPassword = 'reset-password',
}
