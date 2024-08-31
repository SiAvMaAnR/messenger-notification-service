import { Test, TestingModule } from '@nestjs/testing';
import { EmailService } from './email.service';
import { EmailModule } from './email.module';
import { ConfigModule } from '@nestjs/config';

describe('EmailService', () => {
  let service: EmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailService],
      imports: [EmailModule, ConfigModule.forRoot({ isGlobal: true })],
    }).compile();

    service = module.get<EmailService>(EmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});