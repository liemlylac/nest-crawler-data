import { HttpService, Injectable, InternalServerErrorException } from '@nestjs/common';
import * as fs from 'fs';
import { RandomUserDto } from './dto/random-user.dto';
import { UserDto } from './dto/user.dto';
import { UserRo } from './ro/user.ro';

@Injectable()
export class RandomUserService {

  constructor(
    private httpService: HttpService,
  ) {
  }

  protected mappingDtoToRo(userDto: UserDto) {
    const userRo = new UserRo();
    userRo.uuid = userDto.login.uuid;
    userRo.username = userDto.login.username;
    userRo.password = userDto.login.password;
    userRo.firstName = userDto.name.first;
    userRo.lastName = userDto.name.last;
    return userRo
  }

  protected transformDtoToRo(userDtoArr: UserDto[]) {
    const userRoArr = [];
    for (const userDto of userDtoArr) {
      userRoArr.push(this.mappingDtoToRo(userDto));
    }
    return userRoArr;
  }

  async getUsers(queries: any) {
    const response: any = await this.httpService.get('https://randomuser.me/api', { params: queries }).toPromise();
    const body: RandomUserDto = response.data;
    const users = this.transformDtoToRo(body.results);

    let content = 'export const UsersData = ';
    content += JSON.stringify(users);
    content += '\n';

    let fileName = './var/';
    fileName += `get-users-${new Date().getTime()}`;
    fileName += '.ts';

    try {
      fs.writeFileSync(fileName, content, 'utf8');
      console.log(`The file has been saved to: "${fileName}"`);
      return users;
    } catch (e) {
      console.log(e)
    }
    throw new InternalServerErrorException();
  }
}
