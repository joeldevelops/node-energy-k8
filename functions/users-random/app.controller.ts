import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    private readonly prisma: PrismaService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/liveness')
  getLiveness(): string {
    return 'OK';
  }

  @Get('/readiness')
  async getReadiness(@Res() res: Response): Promise<Response> {
    const isDbConnected = await this.prisma.checkDatabaseConnection();
    if (isDbConnected) {
      return res.status(HttpStatus.OK).json({ status: 'ok', database: 'up' });
    } else {
      return res.status(HttpStatus.SERVICE_UNAVAILABLE).json({ status: 'error', database: 'down' });
    }
  }
}
