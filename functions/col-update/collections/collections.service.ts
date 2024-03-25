import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Collection, Prisma } from '@prisma/client';

@Injectable()
export class CollectionsService {
  constructor(private prisma: PrismaService) {}

  async updateCollection(params: {
    where: Prisma.CollectionWhereUniqueInput;
    data: Prisma.CollectionUpdateInput;
  }): Promise<Collection> {
    const { where, data } = params;
    return this.prisma.collection.update({
      where,
      data,
    });
  }
}
