import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from '../core/prisma-service/prisma.service';

@Module({
  providers: [UsersService, PrismaService],
})
export class UsersModule {}
