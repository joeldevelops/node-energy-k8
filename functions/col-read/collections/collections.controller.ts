import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CollectionsService } from './collections.service';
import { Prisma, Collection } from '@prisma/client';

@Controller('collections')
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Get('/user/:userId')
  async findCollectionsByUser(@Param('userId') userId: string): Promise<Collection[]> {
    return this.collectionsService.findCollectionsByUser(Number(userId));
  }
}
