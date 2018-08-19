import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimestampController } from './api/timestamp/timestamp.controller';

@Module({
  imports: [],
  controllers: [AppController, TimestampController],
  providers: [AppService],
})
export class AppModule {}
