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

  @Delete(':id')
  async deleteComic(@Param('id') id: string): Promise<Comic> {
    return this.comicsService.deleteComic({ id: Number(id) });
  }
}
