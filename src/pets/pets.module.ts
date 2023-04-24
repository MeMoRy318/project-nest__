import { Module } from '@nestjs/common';

import { PrismaService } from '../core';
import { UsersService } from '../users';
import { PetsService } from './pets.service';

@Module({
  providers: [PetsService, PrismaService, UsersService],
})
export class PetsModule {}
