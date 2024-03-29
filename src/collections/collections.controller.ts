import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CollectionsService } from './collections.service';
import { Prisma, Collection } from '@prisma/client';

@Controller('collections')
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Post()
  async createCollection(
    @Body() collectionData: { name: string, comicId: number, userId: number }
    ): Promise<Collection> {
    return this.collectionsService.createCollection({
      name: collectionData.name,
      comics: { connect: { id: collectionData.comicId } },
      user: { connect: { id: collectionData.userId } },
    });
  }

  @Get()
  async findAllCollections(): Promise<Collection[]> {
    return this.collectionsService.findAllCollections();
  }

  @Get('/random')
  async findRandomCollection(): Promise<Collection | { id: number, name: string }> {
    return this.collectionsService.findRandomCollection();
  }

  @Get('/user/:userId')
  async findCollectionsByUser(@Param('userId') userId: string): Promise<Collection[]> {
    return this.collectionsService.findCollectionsByUser(Number(userId));
  }

  @Put(':id')
  async updateCollection(
    @Param('id') id: string,
    @Body() collectionData: Prisma.CollectionUpdateInput,
  ): Promise<Collection> {
    return this.collectionsService.updateCollection({
      where: { id: Number(id) },
      data: collectionData,
    });
  }

  @Delete(':id')
  async deleteCollection(@Param('id') id: string): Promise<Collection> {
    return this.collectionsService.deleteCollection({ id: Number(id) });
  }
}
