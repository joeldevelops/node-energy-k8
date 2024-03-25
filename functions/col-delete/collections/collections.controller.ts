import { Controller, Delete, Param } from '@nestjs/common';
import { CollectionsService } from './collections.service';
import { Collection } from '@prisma/client';

@Controller('collections')
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Delete(':id')
  async deleteCollection(@Param('id') id: string): Promise<Collection> {
    return this.collectionsService.deleteCollection({ id: Number(id) });
  }
}
