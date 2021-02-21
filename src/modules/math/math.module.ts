import { Inject, Module } from '@nestjs/common';
import { MathController } from './math.controller';
import { MathService } from './math.service';
import { ClientProxy, ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'MATH_SERVICE', transport: Transport.TCP },
    ]),
  ],
  controllers: [MathController],
  providers: [MathService],
})
export class MathModule {
  constructor(@Inject('MATH_SERVICE') private client: ClientProxy) {}
}
