import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Collection, Prisma } from '@prisma/client';

@Injectable()
export class CollectionsService {
  constructor(private prisma: PrismaService) {}

  async findRandomCollection() {
    const collections = await this.prisma.collection.findMany({
      take: 1,
      orderBy: {
        id: 'desc',
      },
    });

    if (collections.length === 0) return { id: -1, name: 'No collections found' };
    const randomIndex = Math.floor(Math.random() * collections.length);
    return collections[randomIndex];
  }
}
