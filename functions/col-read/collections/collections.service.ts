import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Collection } from '@prisma/client';

@Injectable()
export class CollectionsService {
  constructor(private prisma: PrismaService) {}

  async findCollectionsByUser(userId: number): Promise<Collection[]> {
    return this.prisma.collection.findMany({
      where: {
        userId,
      },
    });
  }
}
