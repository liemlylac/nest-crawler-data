import { Controller, Get, Query } from '@nestjs/common';
import { RandomUserService } from './random-user.service';
import { ApiInternalServerErrorResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { UserRo } from './ro/user.ro';
import { InternalServerErrorRo } from '../swagger/exeption/internal-server-error.ro';

@ApiTags('random-user')
@Controller('random-user')
export class RandomUserController {
  constructor(
    private randomUserService: RandomUserService
  ) {
  }

  @ApiQuery({
    name: 'results',
    description: 'Requesting Multiple Users.' +
      'For example: ?results=10',
    example: '10',
    allowEmptyValue: true,
    required: false
  })
  @ApiQuery({
    name: 'gender',
    description: 'Specifying a gender.' +
      'For example: ?gender=female',
    example: 'female',
    allowEmptyValue: true,
    required: false
  })
  @ApiQuery({
    name: 'password',
    description: 'Passwords pattern: ' +
      'For example: ?password=special,upper,lower,number,6-8',
    example: 'special,upper,lower,number,6-8',
    allowEmptyValue: true,
    required: false
  })
  @ApiQuery({
    name: 'seed',
    description: 'Seeds allow you to always generate the same set of users. ' +
      'For example, the seed "foobar" will always return results for Becky Sims ' +
      '(for version 1.0). Seeds can be any string or sequence of characters.' +
      'For example: ?seed=foobar',
    example: 'csv',
    allowEmptyValue: true,
    required: false
  })
  @ApiQuery({
    name: 'formats',
    description: 'List format: JSON(default), ' +
      'PrettyJSON or pretty, ' +
      'CSV, ' +
      'YAML, ' +
      'XML. ' +
      'For example: ?format=csv',
    example: 'csv',
    allowEmptyValue: true,
    required: false
  })
  @ApiQuery({
    name: 'nat',
    description: 'Nationalities: v1.3: AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, ' +
      'IE, IR, NO, NL, NZ, TR, US. ' +
      'Formats example: ?nat=us,dk,fr,gb',
    example: 'us,dk,fr,gb',
    allowEmptyValue: true,
    required: false
  })
  @ApiQuery({
    name: 'page',
    description: 'Make sure that you use the same seed and page number ' +
      '(1 based index) in order to get back the same results. ' +
      'Formats example: ?page=3&results=10&seed=abc',
    allowEmptyValue: true,
    required: false
  })
  @ApiQuery({
    name: 'inc',
    description: 'Including/Excluding fields: gender, name, location, email, ' +
      'login, registered, dob, phone, cell, id, picture, nat. ' +
      'If you only wanted the names,genders,and nats of users:' +
      '?inc=gender,name,nat',
    allowEmptyValue: true,
    required: false
  })
  @ApiQuery({
    name: 'exc',
    description: 'Including/Excluding fields: gender, name, location, email, ' +
      'login, registered, dob, phone, cell, id, picture, nat. ' +
      'If you want everything except for login data:' +
      '?exc=login',
    allowEmptyValue: true,
    required: false
  })
  @ApiOkResponse({type: UserRo, isArray: true })
  @ApiInternalServerErrorResponse({type: InternalServerErrorRo})
  @Get()
  getRandomUsers(@Query() queries) {
    return this.randomUserService.getUsers(queries)
  }
}
