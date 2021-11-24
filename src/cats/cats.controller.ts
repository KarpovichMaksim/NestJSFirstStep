import { Body, Delete, Patch, Put, Query } from "@nestjs/common";
import { Controller, Get, Post, Param } from "@nestjs/common";
import { CreateCatDto } from "./dto/create-cat.dto";
import { ListAllEntities } from "./dto/list-all-entities";
import { UpdateCatDto } from "./dto/update-cat-dto";

@Controller("cats")
export class CatsController {
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return `Add new cat`;
  }
  @Get(":id")
  findOne(@Param() params): string {
    return `This action return cat with current param ${params.id}`;
  }
  @Get()
  findAll(@Query() query: ListAllEntities): string {
    return `This action return cats`;
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
