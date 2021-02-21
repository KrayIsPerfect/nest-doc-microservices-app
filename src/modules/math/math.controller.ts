import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, MessagePattern, NatsContext, Payload } from '@nestjs/microservices';
import { from, Observable } from 'rxjs';

@Controller('math')
export class MathController {
  @MessagePattern({ cmd: 'sum' })
  accumulate1(data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }

  @MessagePattern({ cmd: 'sum' })
  accumulate2(data: number[]): Observable<number> {
    return from([1, 2, 3]);
  }

  @EventPattern('user_created')
  async handleUserCreated(data: Record<string, unknown>) {
    // business logic
  }

  @MessagePattern('time.us.*')
  getDate(@Payload() data: number[], @Ctx() context: NatsContext) {
    console.log(`Subject: ${context.getSubject()}`); // e.g. "time.us.east"
    return new Date().toLocaleTimeString();
  }
}
