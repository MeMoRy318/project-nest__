import { Injectable } from '@nestjs/common';
import { PrismaService } from '../core/prisma-service/prisma.service';
import { CreatePetsDto } from './dto/pets.dto';

@Injectable()
export class PetsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createPet(data: CreatePetsDto): Promise<CreatePetsDto> {
    return await this.prismaService.pet.create({ data: { ...data } });
  }
}
