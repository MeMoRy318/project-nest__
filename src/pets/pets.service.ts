import { Injectable } from '@nestjs/common';

import { CreatePetsDto } from './index';
import { PrismaService } from '../core';

@Injectable()
export class PetsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createPet(data: CreatePetsDto): Promise<CreatePetsDto> {
    return await this.prismaService.pet.create({ data: { ...data } });
  }
}
