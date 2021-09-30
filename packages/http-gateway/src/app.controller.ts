import { Controller, Post, Body, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';

import { MathService } from './math.service';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly mathService: MathService) {}

  @Post('add')
  public accumulate(@Body('data') data: number[]): Observable<number> {
    this.logger.log(`Adding ${data.toString()}`);
    return this.mathService.accumulate(data);
  }

  @Post('multiply')
  public multiply(@Body('data') data: number[]): Observable<number> {
    this.logger.log(`Multiplying ${data.toString()}`);
    return this.mathService.multiply(data);
  }
}
