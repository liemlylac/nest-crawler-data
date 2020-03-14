import { UserDto } from './user.dto';

export interface RandomUserInfoDto {
  seed: string;
  results: number;
  page: number;
  version: string
}

export class RandomUserDto {
  results: UserDto[];
  info: RandomUserInfoDto;
}
