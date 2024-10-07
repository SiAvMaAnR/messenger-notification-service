import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { rabbitMQConfig } from './config/rabbitmq.config';
import { MicroserviceOptions } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { createDocument } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  const configService = app.get(ConfigService);
  const appPort = configService.get<number>('app.port');

  const rmqConfig = getRMQConfig(configService);

  app.connectMicroservice<MicroserviceOptions>(rmqConfig);

  createDocument(app);

  await app.startAllMicroservices();
  await app.listen(appPort);
}

function getRMQConfig(
  configService: ConfigService<unknown, boolean>,
): MicroserviceOptions {
  const rmqQueue = configService.get<string>('rmq.queue');
  const rmqUrl = configService.get<string>('rmq.url');

  const rmqConfig = rabbitMQConfig({
    queue: rmqQueue,
    urls: [rmqUrl],
  });

  return rmqConfig;
}

bootstrap();
