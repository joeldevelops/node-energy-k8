import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Comic } from '@prisma/client';

@Injectable()
export class ComicsService {
  constructor(private prisma: PrismaService) {}

  async findComicsByUser(userId: number): Promise<Comic[]> {
    return this.prisma.comic.findMany({
      where: {
        userId,
      },
    });
  }
}
