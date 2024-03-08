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

  async findAllComics(): Promise<Comic[]> {
    return this.prisma.comic.findMany();
  }

  async findComicsByUser(userId: number): Promise<Comic[]> {
    return this.prisma.comic.findMany({
      where: {
        userId,
      },
    });
  }

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

  async deleteComic(where: Prisma.ComicWhereUniqueInput): Promise<Comic> {
    return this.prisma.comic.delete({
      where,
    });
  }

  async findRandomComic() {
    const comics = await this.prisma.comic.findMany({
      take: 1,
      orderBy: {
        id: 'desc',
      },
    });

    if (comics.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * comics.length);
    return comics[randomIndex];
  }

  // We want to simulate a long running operation which uses CPU.
  // So here is an implementation of a Fibonacci sequence calculator with inefficiencies.
  // It will be called from the generate-report endpoint to simulate a big report.
  async calculateHighFibonacci(number: number): Promise<number> {
    const fib = (n: number): number => {
      if (n <= 1) return n;
      return fib(n - 1) + fib(n - 2);
    };
  
    return fib(number);
  }
}
