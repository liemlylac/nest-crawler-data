import { Module } from '@nestjs/common';
import { RandomUserModule } from './random-user/random-user.module';

@Module({
  imports: [
    RandomUserModule
  ],
  providers: [
  ],
})
export class AppModule {}
