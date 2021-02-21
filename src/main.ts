import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const microserviceApp = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
    },
  );

  microserviceApp.listen(() => console.log('Microservice is listening'));
  //
  // const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //
  // app.enableCors({
  //   origin: true,
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //   credentials: true,
  // });
  //
  // // создать страницу с описанием API
  // const document = SwaggerModule.createDocument(
  //   app,
  //   new DocumentBuilder()
  //     .setTitle('Nest Vue Players App')
  //     .setVersion('0.1')
  //     .build(),
  // );
  // SwaggerModule.setup('/docs/', app, document);
  //
  // await app.listen(3000);
}
bootstrap();
