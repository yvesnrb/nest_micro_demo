import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { MathService } from './math.service';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly mathService: MathService) {}

  @MessagePattern('math.add')
  public async accumulate(@Payload() data: any): Promise<number> {
    this.logger.log(`Adding ${data.value.toString()}`);
    return this.mathService.accumulate(data.value);
  }

  @MessagePattern('math.mlt')
  public async multiply(@Payload() data: any): Promise<number> {
    this.logger.log(`Multiplying ${data.value.toString}`);
    return this.mathService.multiply(data.value);
  }
}
