import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private userList: User[] = [];

  create(createUserInput: CreateUserInput) : User {
    this.userList.push(createUserInput);
    console.log(this.userList);
    return createUserInput;
  }

  findAll() : User[]{
    return this.userList;
  }

  findOne(id: number): User {
    return this.userList.find(user => user.id === id);
  }

  update(id: number, updateUserInput: UpdateUserInput) : User{
    const user = this.userList.find(user => user.id === id);
    Object.assign(user, updateUserInput);
    return user;
  }

  remove(id: number) : User{
    const userIndex = this.userList.findIndex(user => user.id === id);
    const user = this.userList.find(user => user.id === id);
    this.userList.splice(userIndex, 1);
    return user;
  }
}
