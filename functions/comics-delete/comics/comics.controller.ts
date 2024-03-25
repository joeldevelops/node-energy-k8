import {
  Controller,
  Delete,
  Param,
} from '@nestjs/common';
import { ComicsService } from './comics.service';
import { Comic } from '@prisma/client';

@Controller('comics')
export class ComicsController {
  constructor(private readonly comicsService: ComicsService) {}

  @Delete(':id')
  async deleteComic(@Param('id') id: string): Promise<Comic> {
    return this.comicsService.deleteComic({ id: Number(id) });
  }
}
