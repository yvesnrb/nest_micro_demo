import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { MathService } from './math.service';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly mathService: MathService) {}

  @MessagePattern('math.add')
  public async accumulate(data: number[]): Promise<number> {
    this.logger.log(`Adding ${data.toString()}`);
    return this.mathService.accumulate(data);
  }

  @MessagePattern('math.mlt')
  public async multiply(data: number[]): Promise<number> {
    this.logger.log(`Multiplying ${data.toString}`);
    return this.mathService.multiply(data);
  }
}
