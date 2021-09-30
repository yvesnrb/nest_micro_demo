import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class MathService {
  private messageClient: ClientProxy;

  constructor() {
    this.messageClient = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'math_queue',
        queueOptions: {
          durable: false,
        },
      },
    });
  }

  public accumulate(data: number[]): Observable<number> {
    return this.messageClient.send<number, number[]>('math.add', data);
  }

  public multiply(data: number[]): Observable<number> {
    return this.messageClient.send<number, number[]>('math.mlt', data);
  }
}
