import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { ComicsService } from './comics.service';
import { Comic } from '@prisma/client';

@Controller('comics')
export class ComicsController {
  constructor(private readonly comicsService: ComicsService) {}

  @Post()
  async createComic(
    @Body() comicData: { name: string; author: string; userId: number },
  ): Promise<Comic> {
    // Body should be: { name, author, userId }
    return this.comicsService.createComic({
      name: comicData.name,
      author: comicData.author,
      user: { connect: { id: comicData.userId } },
    });
  }
}
