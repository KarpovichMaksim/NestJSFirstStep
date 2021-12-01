import {
  Body,
  Delete,
  HttpException,
  HttpStatus,
  ParseIntPipe,
  Patch,
  SetMetadata,
  UseFilters,
  UseGuards,
} from "@nestjs/common";
import { Controller, Get, Post, Param } from "@nestjs/common";
import { CreateCatDto } from "./dto/create-cat.dto";
import { UpdateCatDto } from "./dto/update-cat-dto";
import { CatsService } from "./cats.service";
import { Cat } from "./interfaces/cat.interface";
import { HttpExceptionFilter } from "../common/filters/http-exception.filter";
import { RoleGuard } from "src/common/guards/role.guard";
import { Roles } from "src/common/decorators/role.decorator";

@Controller("cats")
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Post()
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }
  @Get(":id")
  @UseGuards(RoleGuard)
  findOne(@Param("id", ParseIntPipe) id): string {
    return `This action return cat with current param ${id}`;
  }
  @Roles("admin")
  @Get()
  async findAll(): Promise<Cat[]> {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: "Some custom error message",
      },
      HttpStatus.FORBIDDEN
    );
    return this.catsService.findAll();
  }
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates cat with ID:${id}`;
  }
  @Delete(":id")
  remove(@Param("id") id: string) {
    return `This action removes cat with ID:${id}`;
  }
}
