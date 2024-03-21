import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ComicsService } from './comics.service';
import { Prisma, Comic } from '@prisma/client';

@Controller('comics')
export class ComicsController {
  constructor(private readonly comicsService: ComicsService) {}

  @Get('/user/:userId')
  async findComicsByUser(@Param('userId') userId: string): Promise<Comic[]> {
    return this.comicsService.findComicsByUser(Number(userId));
  }
}
