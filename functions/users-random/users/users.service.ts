import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findRandomUser() {
    // Example for PostgreSQL
    const users = await this.prisma.user.findMany({
      take: 1,
      orderBy: {
        id: 'desc',
      },
    });
    if (users.length === 0) return { id: -1, name: 'No users found' };
    const randomIndex = Math.floor(Math.random() * users.length);
    return users[randomIndex];
  }
}