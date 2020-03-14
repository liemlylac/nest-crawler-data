import { ApiProperty } from '@nestjs/swagger';

export class UserRo {

  @ApiProperty({
    example: '18ee34f8-dbb9-4a47-a4f8-60a1ec2c3080'
  })
  uuid: string;

  @ApiProperty({
    example: 'beatlove60'
  })
  username: string;

  @ApiProperty({
    example: 'gYCoG4'
  })
  password: string;

  @ApiProperty({
    example: 'Beat'
  })
  firstName: string;

  @ApiProperty({
    example: 'Love'
  })
  lastName: string;
}
