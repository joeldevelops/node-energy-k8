import {
  Body,
  Controller,
  Param,
  Put,
} from '@nestjs/common';
import { ComicsService } from './comics.service';
import { Prisma, Comic } from '@prisma/client';

@Controller('comics')
export class ComicsController {
  constructor(private readonly comicsService: ComicsService) {}

  @Put(':id')
  async updateComic(
    @Param('id') id: string,
    @Body() comicData: Prisma.ComicUpdateInput,
  ): Promise<Comic> {
    return this.comicsService.updateComic({
      where: { id: Number(id) },
      data: comicData,
    });
  }
}
