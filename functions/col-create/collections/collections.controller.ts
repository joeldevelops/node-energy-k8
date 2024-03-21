import { Body, Controller, Post } from '@nestjs/common';
import { CollectionsService } from './collections.service';
import { Collection } from '@prisma/client';

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
}
