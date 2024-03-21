import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma, User } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/random')
  async findRandomUser(): Promise<User | { id: number, name: string }> {
    return this.usersService.findRandomUser();
  }
}


