export type ConfirmRegistrationTemplateArgs = {
  recipient: string;
  context: {
    confirmToken: string;
    recipientName: string;
  };
};

export enum EmailTemplate {
  ConfirmRegistration = 'confirm-registration',
}
