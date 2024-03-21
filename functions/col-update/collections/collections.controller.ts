import { Body, Controller, Param, Put } from '@nestjs/common';
import { CollectionsService } from './collections.service';
import { Prisma, Collection } from '@prisma/client';

@Controller('collections')
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) {}

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
}
