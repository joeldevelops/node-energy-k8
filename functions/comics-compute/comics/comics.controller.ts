import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';
import { ComicsService } from './comics.service';

@Controller('comics')
export class ComicsController {
  constructor(private readonly comicsService: ComicsService) {}

  @Get('/generate-report/:number')
  async calculateFibonacci(@Param('number') number: string): Promise<string> {
    // Simulation of a long running CPU bound operation
    const result = await this.comicsService.calculateHighFibonacci(
      Number(number),
    );
    return `Fibonacci result for ${number} is ${result}`;
  }
}
