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

  @Get()
  async findAllComics(): Promise<Comic[]> {
    return this.comicsService.findAllComics();
  }

  @Get('/random')
  async findRandomComic(): Promise<Comic | null> {
    return this.comicsService.findRandomComic();
  }

  @Get('/user/:userId')
  async findComicsByUser(@Param('userId') userId: string): Promise<Comic[]> {
    return this.comicsService.findComicsByUser(Number(userId));
  }

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

  @Delete(':id')
  async deleteComic(@Param('id') id: string): Promise<Comic> {
    return this.comicsService.deleteComic({ id: Number(id) });
  }

  @Get('/generate-report/:number')
  async calculateFibonacci(@Param('number') number: string): Promise<string> {
    // Simulation of a long running CPU bound operation
    const result = await this.comicsService.calculateHighFibonacci(
      Number(number),
    );
    return `Fibonacci result for ${number} is ${result}`;
  }
}
