import { Test, TestingModule } from '@nestjs/testing';
import { TimestampController } from './timestamp.controller';

describe('Timestamp Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [TimestampController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: TimestampController = module.get<TimestampController>(TimestampController);
    expect(controller).toBeDefined();
  });
});
