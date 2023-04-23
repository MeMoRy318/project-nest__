import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PrismaService } from '../core/prisma-service/prisma.service';
import { UsersService } from '../users/users.service';

@Module({
  providers: [PetsService, PrismaService, UsersService],
})
export class PetsModule {}
