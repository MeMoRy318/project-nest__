import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePetsDto {
  @ApiProperty({ required: true, example: 'Sima' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: true, example: 'Dog' })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({ required: false, example: 2 })
  @IsNumber()
  @IsOptional()
  age?: number;

  @ApiProperty()
  image?: string;

  @ApiProperty()
  logo?: string;

  @ApiProperty({
    required: true,
    example: '985e1621-51a7-4c51-9097-76c7ce53d033',
  })
  @IsString()
  @IsNotEmpty()
  ownerId: string;
}

export class UpdatePetsDto {
  @ApiProperty({ required: true, example: 'Sima' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: true, example: 'Dog' })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({ required: false, example: 2 })
  @IsNumber()
  @IsOptional()
  age?: number;

  @ApiProperty()
  image?: string;

  @ApiProperty()
  logo?: string;

  @ApiProperty({
    required: true,
    example: '985e1621-51a7-4c51-9097-76c7ce53d033',
  })
  @IsString()
  @IsNotEmpty()
  ownerId: string;
}
