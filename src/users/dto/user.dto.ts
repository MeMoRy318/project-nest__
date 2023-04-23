import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ required: true, example: 'Igor' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: false, example: 21 })
  @IsNumber()
  @IsOptional()
  age?: number;

  @ApiProperty({ required: true, example: 'user@gmail.com' })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ required: false, example: 'Lviv' })
  @IsString()
  @IsOptional()
  city?: string;

  @ApiProperty()
  avatar?: string;

  @ApiProperty({ required: false, example: true })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}

export class UpdateUserDto {
  @ApiProperty({ required: true, example: 'Igor' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ required: false, example: 21 })
  @IsNumber()
  @IsOptional()
  age?: number;

  @ApiProperty({ required: true, example: 'user@gmail.com' })
  @IsString()
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ required: false, example: 'Lviv' })
  @IsString()
  @IsOptional()
  city?: string;

  @ApiProperty()
  avatar?: string;

  @ApiProperty({ required: false, example: true })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
