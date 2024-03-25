import { Module } from '@nestjs/common';
import { ComicsController } from './comics.controller';
import { ComicsService } from './comics.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [ComicsController],
  providers: [ComicsService, PrismaService],
})
export class ComicsModule {}
