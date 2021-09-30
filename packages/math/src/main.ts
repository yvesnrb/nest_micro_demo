import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import axios from 'axios';

import { AppModule } from './app.module';

const logger = new Logger('Main');

const microserviceOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'micro-demo',
      brokers: ['localhost:29092'],
      connectionTimeout: 10000,
    },
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );
  app.listen();
  logger.log('Microservice is listening...');
}

bootstrap();
