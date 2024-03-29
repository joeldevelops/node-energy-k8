import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Comic, Prisma } from '@prisma/client';

@Injectable()
export class ComicsService {
  constructor(private prisma: PrismaService) {}

  async deleteComic(where: Prisma.ComicWhereUniqueInput): Promise<Comic> {
    return this.prisma.comic.delete({
      where,
    });
  }
}
