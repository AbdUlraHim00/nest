// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private usersServices: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.usersServices.create(body.email, body.password);
  }

  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.usersServices.findOne(parseInt(id));
  }

  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.usersServices.find(email);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.usersServices.remove(parseInt(id));
  }
}
