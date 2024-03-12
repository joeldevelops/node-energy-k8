import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Comic, Prisma } from '@prisma/client';
import { Worker } from 'worker_threads';

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

    if (comics.length === 0) return { id: -1, name: 'No comics found' };
    const randomIndex = Math.floor(Math.random() * comics.length);
    return comics[randomIndex];
  }

  // We want to simulate a long running operation which uses CPU.
  // So here is an implementation of a Fibonacci sequence calculator with inefficiencies.
  // It will be called from the generate-report endpoint to simulate a big report.
  async calculateHighFibonacci(number: number): Promise<number> {
    return new Promise((resolve, reject) => {
      const worker = new Worker('./dist/comics/comics.worker.js');
      worker.postMessage(number);
  
      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', (code) => {
        if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
      });
    });
  }
}
