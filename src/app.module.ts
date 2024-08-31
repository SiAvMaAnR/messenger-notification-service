import { MiddlewareConsumer, Module } from '@nestjs/common';
import { EmailModule } from './email/email.module';
import { TimerMiddleware } from './middlewares/timer.middleware';
import { ConfigModule } from '@nestjs/config';
import config from './config/app.config';

@Module({
  imports: [
    EmailModule,
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TimerMiddleware).forRoutes('*');
  }
}
