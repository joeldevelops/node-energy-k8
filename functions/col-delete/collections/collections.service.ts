import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Collection, Prisma } from '@prisma/client';

@Injectable()
export class CollectionsService {
  constructor(private prisma: PrismaService) {}

  async deleteCollection(where: Prisma.CollectionWhereUniqueInput): Promise<Collection> {
    return this.prisma.collection.delete({
      where,
    });
  }
}
