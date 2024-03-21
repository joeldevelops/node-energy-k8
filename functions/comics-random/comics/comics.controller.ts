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

  @Get('/random')
  async findRandomComic(): Promise<Comic | { id: number, name: string }> {
    return this.comicsService.findRandomComic();
  }
}
