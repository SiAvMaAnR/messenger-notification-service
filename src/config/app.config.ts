export default (): Config => ({
  app: {
    port: parseInt(process.env.APP_PORT),
  },
  rmq: {
    queue: process.env.RMQ_QUEUE,
    url: process.env.RMQ_URL,
  },
  email: {
    host: process.env.MAIL_HOST,
    user: process.env.MAIL_USER,
    password: process.env.MAIL_PASSWORD,
    from: process.env.MAIL_FROM,
    port: parseInt(process.env.MAIL_PORT),
  },
});

export interface EmailConfig {
  host: string;
  user: string;
  password: string;
  from: string;
  port: number;
}

export interface AppConfig {
  port: number;
}

export interface RMQConfig {
  queue: string;
  url: string;
}

export interface Config {
  app: AppConfig;
  email: EmailConfig;
  rmq: RMQConfig;
}
