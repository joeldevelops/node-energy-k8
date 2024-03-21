import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Comic, Prisma } from '@prisma/client';

@Injectable()
export class ComicsService {
  constructor(private prisma: PrismaService) {}

  async updateComic(params: {
    where: Prisma.ComicWhereUniqueInput;
    data: Prisma.ComicUpdateInput;
  }): Promise<Comic> {
    const { where, data } = params;
    return this.prisma.comic.update({
      where,
      data,
    });
  }
}
