import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { rabbitMQConfig } from './config/rabbitmq.config';
import { MicroserviceOptions } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const appPort = configService.get<number>('app.port');
  const rmqQueue = configService.get<string>('rmq.queue');
  const rmqUrl = configService.get<string>('rmq.url');

  const rmqConfig = rabbitMQConfig({
    queue: rmqQueue,
    urls: [rmqUrl],
  });

  app.connectMicroservice<MicroserviceOptions>(rmqConfig);

  await app.startAllMicroservices();
  await app.listen(appPort);
}
bootstrap();
