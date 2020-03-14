import { HttpStatus } from '@nestjs/common';
import { HttpExceptionRo } from './http-exception.ro';
import { ApiProperty } from '@nestjs/swagger';

export class InternalServerErrorRo extends HttpExceptionRo {
  @ApiProperty({
    example: HttpStatus.INTERNAL_SERVER_ERROR
  })
  statusCode: number;

  @ApiProperty({
    example: 'Internal Server Error'
  })
  message: string;
}
