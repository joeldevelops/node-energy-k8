import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CollectionsService } from './collections.service';
import { Prisma, Collection } from '@prisma/client';

@Controller('collections')
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Delete(':id')
  async deleteCollection(@Param('id') id: string): Promise<Collection> {
    return this.collectionsService.deleteCollection({ id: Number(id) });
  }
}
