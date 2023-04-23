import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Req,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PetsService } from './pets.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from '../core/file-upload/file.upload';
import { CreatePetsDto } from './dto/pets.dto';
import { UsersService } from '../users/users.service';

@Controller('pets')
@ApiTags('Pets')
export class PetsController {
  constructor(
    private readonly petsService: PetsService,
    private readonly userService: UsersService,
  ) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'image', maxCount: 1 },
        { name: 'logo', maxCount: 1 },
      ],
      {
        storage: diskStorage({
          filename: editFileName,
          destination: './public/pets-avatar',
        }),
        fileFilter: imageFileFilter,
      },
    ),
  )
  async createPet(
    @Req() req: any,
    @Body() body: CreatePetsDto,
    @Res() res: any,
    @UploadedFiles()
    files: { image?: Express.Multer.File[]; logo?: Express.Multer.File[] },
  ): Promise<CreatePetsDto> {
    const user = await this.userService.ById(body.ownerId);
    if (!user) {
      throw new HttpException('user width id not found', HttpStatus.NOT_FOUND);
    }
    if (files?.image) {
      body.image = `./public/pets-avatar/${files.image[0].filename}`;
    }

    if (files?.logo) {
      body.logo = `./public/pets-avatar/${files.logo[0].filename}`;
    }
    return res
      .status(HttpStatus.CREATED)
      .json(await this.petsService.createPet(body));
  }
}
