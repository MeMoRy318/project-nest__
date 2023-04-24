import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { editFileName, imageFileFilter } from '../core';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('User')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/users-avatar',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  @Post()
  async createUser(
    @Req() req: any,
    @Res() res: any,
    @Body() body: CreateUserDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<CreateUserDto> {
    if (file) {
      body.avatar = `./public/users-avatar/${file.filename}`;
    }
    return res.status(HttpStatus.CREATED).json(body);
  }

  @Patch('/userId')
  @ApiParam({ name: 'userId', required: true })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/users-avatar',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async updateUser(
    @Req() req: any,
    @Res() res: any,
    @Body() body: UpdateUserDto,
    @Param('userId') userId: string,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<UpdateUserDto> {
    if (file) {
      body.avatar = `./public/users-avatar/${file.filename}`;
    }
    return res
      .status(HttpStatus.CREATED)
      .json(await this.userService.updateUser(body, userId));
  }

  @Get()
  async getAllUser(@Req() req: any, @Res() res: any): Promise<CreateUserDto[]> {
    return res.status(HttpStatus.OK).json(await this.userService.getAllUser());
  }

  @Get('/:userId')
  @ApiParam({ name: 'userId', required: true })
  async getUserById(
    @Res() res: any,
    @Param('userId') userId: string,
  ): Promise<CreateUserDto> {
    return res.status(HttpStatus.OK).json(await this.userService.ById(userId));
  }

  @Delete('/:userId')
  @ApiParam({ name: 'userId', required: true })
  async deleteById(
    @Res() res: any,
    @Param('userId') userId: string,
  ): Promise<CreateUserDto> {
    return res
      .status(HttpStatus.NO_CONTENT)
      .json(await this.userService.deleteOne(userId));
  }
}
