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

  async findAllCollections(): Promise<Collection[]> {
    return this.prisma.collection.findMany();
  }

  async findCollectionsByUser(userId: number): Promise<Collection[]> {
    return this.prisma.collection.findMany({
      where: {
        userId,
      },
    });
  }

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

  async deleteCollection(where: Prisma.CollectionWhereUniqueInput): Promise<Collection> {
    return this.prisma.collection.delete({
      where,
    });
  }
}
