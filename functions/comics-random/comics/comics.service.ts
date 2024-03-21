import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Comic, Prisma } from '@prisma/client';

@Injectable()
export class ComicsService {
  constructor(private prisma: PrismaService) {}
  
  async findRandomComic() {
    const comics = await this.prisma.comic.findMany({
      take: 1,
      orderBy: {
        id: 'desc',
      },
    });

    if (comics.length === 0) return { id: -1, name: 'No comics found' };
    const randomIndex = Math.floor(Math.random() * comics.length);
    return comics[randomIndex];
  }
}
