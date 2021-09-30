import { Injectable } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class MathService {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'micro-demo',
        brokers: ['localhost:29092'],
        connectionTimeout: 10000,
      },
    },
  })
  private messageClient: ClientKafka;

  public onModuleInit(): void {
    this.messageClient.subscribeToResponseOf('math.add');
    this.messageClient.subscribeToResponseOf('math.mlt');
  }

  public accumulate(data: number[]): Observable<number> {
    return this.messageClient.send<number, number[]>('math.add', data);
  }

  public multiply(data: number[]): Observable<number> {
    return this.messageClient.send<number, number[]>('math.mlt', data);
  }
}
