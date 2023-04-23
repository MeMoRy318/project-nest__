import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { PrismaService } from '../core/prisma-service/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  async createUser(data: CreateUserDto): Promise<CreateUserDto> {
    return await this.prismaService.user.create({ data: { ...data } });
  }

  async updateUser(data: UpdateUserDto, id: string): Promise<UpdateUserDto> {
    return await this.prismaService.user.update({
      where: { id },
      data: { ...data },
    });
  }

  async ById(id: string): Promise<CreateUserDto> {
    return await this.prismaService.user.findFirst({ where: { id } });
  }

  async getAllUser(): Promise<CreateUserDto[]> {
    return await this.prismaService.user.findMany();
  }

  async deleteOne(id: string): Promise<void> {
    await this.prismaService.user.delete({ where: { id } });
  }
}
