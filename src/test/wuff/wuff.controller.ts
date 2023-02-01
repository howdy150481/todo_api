import { Controller, Get } from '@nestjs/common';

@Controller('test/wuff')
export class WuffController {
  @Get()
  mooh(): string {
    return 'Wuff?';
  }
}
