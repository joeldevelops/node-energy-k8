import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  async checkDatabaseConnection(): Promise<boolean> {
    try {
      await this.$connect(); // Attempt to connect to the database
      await this.$queryRaw`SELECT 1`; // Execute a simple test query
      await this.$disconnect(); // Disconnect to clean up the connection
      return true; // Connection successful
    } catch (error) {
      console.error('Database connection check failed', error);
      return false; // Connection failed
    }
  }
}