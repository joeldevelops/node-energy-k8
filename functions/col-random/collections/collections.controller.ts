import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CollectionsService } from './collections.service';
import { Prisma, Collection } from '@prisma/client';

@Controller('collections')
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) {}
  @Get('/random')
  async findRandomCollection(): Promise<Collection | { id: number, name: string }> {
    return this.collectionsService.findRandomCollection();
  }
}
