import { HostParam, Redirect } from "@nestjs/common";
import { Controller, Get, HttpCode, Post, Header, Param } from "@nestjs/common";

@Controller("cats")
export class CatsController {
  @Post()
  @HttpCode(204)
  @Header("Catch-Control", "none")
  @Redirect("https://nestjs.com", 301)
  create(): string {
    return `Add new cat`;
  }
  @Get(":id")
  findOne(@Param() params): string {
    return `This action return cat with current param ${params.id}`;
  }
  @Get()
  findAll(): string {
    return `This action return cats`;
  }
}
