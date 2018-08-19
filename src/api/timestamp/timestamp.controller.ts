import { Controller, Get, Param } from '@nestjs/common';

@Controller('api/timestamp')
export class TimestampController {
  @Get()
  default() {
    return new Date();
  }

  @Get(':date_string')
  format(@Param('date_string') dateString) {
    if (!Number.isNaN(Number(dateString))) {
      dateString = Number(dateString);
    }
    const date = new Date(dateString);
    if (date.toString() === 'Invalid Date') {
      return { unix: null, utc: 'Invalid Date' };
    }

    return { unix: date.getTime(), utc: date.toUTCString() };
  }
}

interface TimestampResponse {
  unix: number;
  utc: string;
}