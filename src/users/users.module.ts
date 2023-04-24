import { PrismaService } from '../core';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService, PrismaService],
})
export class UsersModule {}
