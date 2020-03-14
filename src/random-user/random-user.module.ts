import { HttpModule, Module } from '@nestjs/common';
import { RandomUserController } from './random-user.controller';
import { RandomUserService } from './random-user.service';

@Module({
  imports: [
    HttpModule,
  ],
  controllers: [
    RandomUserController,
  ],
  providers: [
    RandomUserService,
  ]
})
export class RandomUserModule {}
