export interface UserNameDto {
  title: string;
  first: string;
  last: string;
}

export interface UserLocationDto {
  street: string;
  city: string;
  state: string;
  postcode: string;
  coordinates: {
    latitude: string;
    longitude: string;
  },
  timezone: {
    offset: string;
    description: string;
  }
}

export interface UserLoginDto {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export class UserDto {
  gender: string;
  name: UserNameDto;
  location: UserLocationDto;
  email: string;
  login: UserLoginDto;
  dob: {
    date: string;
    age: string;
  };
  registered: {
    date: string;
    age: number
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}
