import { Redirect } from "@nestjs/common";
import { Controller, Get, HttpCode, Post, Header } from "@nestjs/common";

@Controller("cats")
export class CatsController {
  @Post()
  @HttpCode(204)
  @Header("Catch-Control", "none")
  @Redirect("https://nestjs.com", 301)
  create(): string {
    return `Add new cat`;
  }
  @Get()
  findAll(): string {
    return `This action return cats`;
  }
}
