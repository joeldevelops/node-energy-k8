import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Collection, Prisma } from '@prisma/client';

@Injectable()
export class CollectionsService {
  constructor(private prisma: PrismaService) {}

  async createCollection(data: Prisma.CollectionCreateInput): Promise<Collection> {
    return this.prisma.collection.create({
      data,
    });
  }
}
