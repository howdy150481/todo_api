import { Controller, Get } from '@nestjs/common';

@Controller('test/mooh')
export class MoohController {
  @Get()
  mooh(): string {
    return 'Mooh?';
  }
}
