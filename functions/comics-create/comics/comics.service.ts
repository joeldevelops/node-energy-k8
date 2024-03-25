import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Comic, Prisma } from '@prisma/client';

@Injectable()
export class ComicsService {
  constructor(private prisma: PrismaService) {}

  async createComic(data: Prisma.ComicCreateInput): Promise<Comic> {
    return this.prisma.comic.create({
      data,
    });
  }
}
